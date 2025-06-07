# CS224N Assignment 3: Dependency Parsing with Neural Networks

This assignment explores the implementation of a transition-based dependency parser using neural networks. I built the core parsing algorithm, implemented minibatch parsing, and trained a feed-forward neural network to predict parsing transitions.

---

## 🧾 Assignment Overview

### 🔁 Transition-Based Dependency Parsing
- Implement the core logic for parsing sentences using shift-reduce transitions (`Shift`, `Left-Arc`, `Right-Arc`).
- Build a parser that incrementally constructs dependency trees for sentences.

### 🧠 Neural Network Model
- Implement a feed-forward neural network (in PyTorch) to predict the next parsing transition given the current parser state.
- Train the model on annotated data and evaluate its performance using **Unlabeled Attachment Score (UAS)**.

### 📦 Minibatch Parsing
- Extend the parser to process multiple sentences in parallel using minibatches, improving efficiency during training and inference.

---

## 🔧 Key Implementations

### `PartialParse` Class

- `__init__`: Initializes the parser state:
  - `stack`: starts with `["ROOT"]`
  - `buffer`: a copy of the input sentence
  - `dependencies`: an empty list

- `parse_step`: Implements logic for the three transitions:
  - `Shift (S)`: Moves the first word from the buffer to the stack.
  - `Left-Arc (LA)`: Adds a dependency from the top of the stack to the second-top, then removes the second-top item.
  - `Right-Arc (RA)`: Adds a dependency from the second-top to the top of the stack, then removes the top item.

- `parse`: Applies a sequence of transitions to parse a sentence and returns the resulting dependencies.

### `minibatch_parse`
- Parses a list of sentences in minibatches using a model that predicts the next transition for each partial parse.
- Maintains a list of unfinished parses and iteratively applies model-predicted transitions until all parses are complete.

### `run.py`
- Instantiate Adam optimizer and Cross Entropy Loss
- Backpropagate loss and take optimizer step

---

## How to Run
  From assignment specifications: "execute python run.py to train your model and compute predictions on test data from Penn Treebank (annotated with Universal Dependencies)."


