#!/bin/bash

if [ "$1" = "train" ]; then
	CUDA_VISIBLE_DEVICES=0 /opt/anaconda3/envs/local_nmt/bin/python run.py train --train-src=./zh_en_data/train.zh --train-tgt=./zh_en_data/train.en --dev-src=./zh_en_data/dev.zh --dev-tgt=./zh_en_data/dev.en --vocab=vocab.json --cuda --lr=5e-4 --patience=1 --valid-niter=200 --batch-size=32 --dropout=.3
elif [ "$1" = "test" ]; then
        CUDA_VISIBLE_DEVICES=0 /opt/anaconda3/envs/local_nmt/bin/python run.py decode model.bin ./zh_en_data/test.zh ./zh_en_data/test.en outputs/test_outputs.txt --cuda
elif [ "$1" = "dev" ]; then
        CUDA_VISIBLE_DEVICES=0 /opt/anaconda3/envs/local_nmt/bin/python run.py decode model.bin ./zh_en_data/dev.zh ./zh_en_data/dev.en outputs/dev_outputs.txt --cuda
elif [ "$1" = "train_local" ]; then
	/opt/anaconda3/envs/local_nmt/bin/python run.py train --train-src=./zh_en_data/train.zh --train-tgt=./zh_en_data/train.en --dev-src=./zh_en_data/dev.zh --dev-tgt=./zh_en_data/dev.en --vocab=vocab.json --lr=5e-4
elif [ "$1" = "train_debug" ]; then
	/opt/anaconda3/envs/local_nmt/bin/python run.py train --train-src=./zh_en_data/train_debug.zh --train-tgt=./zh_en_data/train_debug.en --dev-src=./zh_en_data/dev.zh --dev-tgt=./zh_en_data/dev.en --vocab=vocab.json --lr=5e-4
elif [ "$1" = "test_local" ]; then
    /opt/anaconda3/envs/local_nmt/bin/python run.py decode model.bin ./zh_en_data/test.zh ./zh_en_data/test.en outputs/test_outputs.txt
elif [ "$1" = "vocab" ]; then
	/opt/anaconda3/envs/local_nmt/bin/python vocab.py --train-src=./zh_en_data/train.zh --train-tgt=./zh_en_data/train.en vocab.json
else
	echo "Invalid Option Selected"
fi
