# CS224N Assignment 4: Neural Machine Translation (NMT)

This repository contains an implementation of a Neural Machine Translation (NMT) model for Stanford's CS224N course, Homework 4 from Winter 2023 by Venkat Subramanian. I also developed a frontend application to allow users to query the model and retrieve English translations from Mandarin sentences.

![Application GIF](https://github.com/venkatsubra01/CS224N-Natural-Language-Processing/blob/main/a4/student/client/gifs/Translation_gif.gif)

## Project Structure
- All coding solutions that I wrote are in the "student" folder
- "a4_handout.pdf" is the original assignment questions with coding and written questions

## Overview

The project implements a sequence-to-sequence NMT model with the following features:
- **Bidirectional LSTM Encoder:** Computes source sentence hidden states in both directions.
- **Unidirectional LSTM Decoder:** Generates the target sentence one token at a time.
- **Global Attention Mechanism:** Allows the decoder to focus on relevant parts of the source sentence at each step and also feeds attention output into the next decoder step input.
- **Beam Search Decoding:** Improves translation quality by considering multiple hypotheses during inference.
- **Custom Embedding Layers:** Separate embeddings for source and target vocabularies, while also padding the source sentences to all be the same length.

## Key Files in "student" folder

- `model_embeddings.py`: Defines the `ModelEmbeddings` class for source and target word embeddings.
- `nmt_model.py`: Implements the NMT model, including encoder, decoder, attention, and beam search.
- `run.py`: Script to train and evaluate the model.
- `vocab.py`, `utils.py`: Utilities for vocabulary management and data processing.
- `client` and `server`: Contains the frontend and backend to see the translation in action

## My Implementation/Code Written

- **Model Embeddings:**  
  - I created embedding layers for both source and target languages, including handling padding tokens.
- **NMT Model:**  
  - I implemented all required layers and logic for encoding, decoding, attention, and output projection.
  - The encoder uses a convolutional layer followed by a BiLSTM.
  - The decoder uses an LSTMCell and computes attention at each step.
  - Beam search is used for generating translations during inference.
- **Client and Server application**
  - Implemented debouncing user queries and fetching responses through the model

## Usage

1. **Install dependencies:**  
   See `local_env.yml` or `gpu_requirements.txt` for environment setup.

2. **Train the model:**  
   I used Google Colab to train this model using free T4 GPUs. train_nmt.ipynb contains the training procedure when in Google Colab. All that is needed to do is upload the zipped project folder as "a4.zip" and run "train_nmt.ipynb" cell by cell.
   
4. **Changes to Make in Colab**
   Change the instances of "/opt/anaconda3/envs/local_nmt/bin/python" to "python3" in run.sh if you want to train (converting from my conda environment to the Colab environment)

5. **Run the translator application**
   In one terminal, execute `cd server` and `python server.py`. Then in another terminal, execute `cd client` and `npm run dev`. Then go to the port stated in the client terminal in your browser.

## Results
1. I hit a BLEU score of 20.3, which is comparable to the expected results of ~20. We will use these model params to make the Mandarin to English translator.
2. Seq2Seq translators do significantly better when there is more context in the sentences.
