# Calculate the accuracy of a baseline that simply predicts "London" for every
#   example in the dev set.
# Hint: Make use of existing code.
# Your solution here should only be a few lines.
from tqdm import tqdm
import utils

text = open("birth_dev.tsv", "r").readlines()
predictions = ["London"]*len(text)
total, correct = utils.evaluate_places("birth_dev.tsv", predictions)

if total > 0:
    print('Correct: {} out of {}: {}%'.format(correct, total, correct/total*100))
else:
    print('Predictions written to {}; no targets provided'
            .format(args.outputs_path))

# We get that just predicting London yields a result of 5% accuracy