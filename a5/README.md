# CS224N Assignment 5: Self-Attention, Transformers and Pretraining

This repository contains code to generate (corrupted span) training data, pretrain, and finetune a GPT-2 like transformer model to predict birthplaces of famous people. The code also includes a simple implementation of PerceiverAR from [Hawthorne et al](https://arxiv.org/abs/2202.07765). This is the last assignment for Stanford's CS224N course, Homework 5 from Winter 2023, and was completed by Venkat Subramanian.

## Project Structure
- All coding solutions that I wrote are in the "student_2023" folder
- "run_a5.ipynb" contains the file that can be used to recreate my results

## Overview

The project implements a transformer-based language model with the following features:
- **CharCorruptionDataset:** A dataset class for generating examples of a simplified span corruption objective.
- **Perceiver Transformer:** A variant of the Transformer model with bottleneck-based attention for efficient processing of long sequences.
- **Pretraining and Finetuning:** Training the model on a large corpus and fine-tuning it on a smaller, task-specific dataset.
- **Evaluation:** Predicting masked spans in text and evaluating the model's performance.

## Key Files that I created in "student_2023" Folder

- `dataset.py`: Implements dataset classes for name-based and character corruption tasks.
- `model.py`: Defines the GPT model, including standard and perceiver-based configurations.
- `run.py`: Script to pretrain, finetune, and evaluate the model.

## My Implementation/Code Written

- **CharCorruptionDataset:**  
  - Implemented the `__getitem__` method to generate input-output pairs for the span corruption objective.
  - Randomly truncated documents to a length between 4 and `block_size * 7/8`.
  - Split truncated documents into `prefix`, `masked_content`, and `suffix` with random lengths.
  - Rearranged the substrings into the format `[prefix] MASK_CHAR [suffix] MASK_CHAR [masked_content] [pads]`.
  - Encoded the input and output strings as tensors for training.

- **Perceiver Transformer:**  
  - Implemented the `DownProjectBlock` and `UpProjectBlock` classes for the perceiver architecture.
  - Added a learned basis vector `self.C` in `DownProjectBlock` for cross-attention with the input sequence.
  - Integrated perceiver-based down-projection, bottleneck processing, and up-projection into the `GPT` model.

- **Pretraining and Finetuning:**  
  - Configured the trainer with hyperparameters for pretraining, including learning rate, batch size, and token limits.
  - Implemented logic to load pretrained model parameters for finetuning or train from scratch.
  - Saved the pretrained and fine-tuned models to specified paths.

## Usage

1. **Install dependencies:**
     I just used the same conda environment from previous assignments

3. **Train the model:**  
   I used Google Colab to train this model using free T4 GPUs. run_a5.ipynb contains the training procedure when in Google Colab. All that is needed to do is upload the zipped project folder and run "run_a5.ipynb" cell by cell.
   
## Results
1. Results are shown in the Colab. Results as expected from assignment handout (a5.pdf)
