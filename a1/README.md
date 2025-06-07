# CS224N Assignment 1: Exploring Word Vectors

This assignment explores the foundations of word embeddings in Natural Language Processing (NLP), focusing on both count-based and prediction-based word vector models. You will implement, analyze, and visualize word vectors, and reflect on their properties and biases.

## Project Structure
- The "student" folder contains all the solutions I wrote for the coding portion of the assignment
- "a1.zip" contains the original project code without solutions
- "a1_handout.pdf" contains the original homework questions
---

## Assignment Overview

### Count-Based Word Vectors
- Build co-occurrence matrices from a text corpus.
- Apply dimensionality reduction (SVD) to obtain word embeddings.
- Visualize embeddings and analyze their clustering behavior.

### Prediction-Based Word Vectors (GloVe)
- Load pre-trained GloVe vectors.
- Reduce their dimensionality for visualization.
- Explore word similarities, analogies, and biases in embeddings.

### Bias Analysis
- Investigate and discuss social biases present in word vectors.

---

## My Implementations

- `distinct_words`:  
  Extracts and returns a sorted list of unique words from the corpus.

- `compute_co_occurrence_matrix`:  
  Constructs a symmetric co-occurrence matrix for a given window size, counting how often words appear near each other. Also builds a word-to-index mapping.

- `reduce_to_k_dim`:  
  Uses Truncated SVD (from `scikit-learn`) to reduce the dimensionality of the co-occurrence matrix, producing k-dimensional word embeddings.

- `plot_embeddings`:  
  Plots 2D word embeddings using `matplotlib`, labeling each point with the corresponding word.

- **GloVe and Cosine Similarity Exploration**:  
  Loads pre-trained GloVe vectors, reduces their dimensionality, and explores word similarities and analogies using cosine similarity.

- **Bias Analysis**:  
  Uses word vector arithmetic to reveal and discuss social biases present in word embeddings.

---

## How to Run

1. Install the required dependencies:
   ```bash
   conda env create -f env.yml
   conda activate cs224n
2. Open the notebook:

3. exploring_word_vectors.ipynb (in Jupyter or VS Code)

4. Run all cells in order.

5. Follow the instructions in the notebook for analysis and submission.
