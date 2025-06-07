# CS224N Assignment 2: word2vec and Stochastic Gradient Descent from Winter 2021 by Venkat Subramanian

This assignment implements the foundational algorithms behind the word2vec model, focusing on the skip-gram architecture and two loss functions: naive softmax and negative sampling. The assignment also includes building and testing a generic stochastic gradient descent (SGD) optimizer.

---

## Assignment Overview

### 1. Stochastic Gradient Descent (SGD)
- Developed a generic SGD optimizer that iteratively updates parameters using gradients from a provided loss function.
- Supports learning rate annealing, parameter saving/loading, and optional postprocessing (such as normalization).
- Includes built-in sanity checks to verify the correctness of the optimizer.

### 2. word2vec Model Components that I Wrote

- **Sigmoid Function:**  
  Implemented a numerically stable sigmoid function for use in loss calculations.

- **Naive Softmax Loss and Gradient:**  
  Computes the softmax probabilities, loss, and gradients for the center and outside word vectors using a numerically stable softmax function.

- **Negative Sampling Loss and Gradient:**  
  Implements the negative sampling loss and gradients, efficiently handling repeated negative samples and updating the appropriate vectors.

- **Skip-gram Model:**  
  Implements the skip-gram model, which predicts context (outside) words given a center word, accumulating the total loss and gradients over all context words.

---

## Testing

- To sanity check all functions in word2vec.py that I wrote, run "python word2vec.py"
- To load real data and train word vectors from a dataset run "sh get datasets.sh" then "python run.py." From the assignment specifications: "Note: The training process may take a long time depending on the efficiency of your implementation and the compute power of your machine (an efficient implementation takes one to two hours). Plan accordingly!
After 40,000 iterations, the script will finish and a visualization for your word vectors will appear. It will also be saved as word vectors.png in your project directory."
