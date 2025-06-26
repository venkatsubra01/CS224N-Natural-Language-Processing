from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import os
parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
os.chdir(parent_dir)
if parent_dir not in sys.path:
    sys.path.insert(0, parent_dir)

from run import decode_single_query

app = Flask(__name__)
CORS(app)


@app.route("/api/translate", methods=['GET'])
def return_translation():
    text = request.args.get('text', '')
    
    translation = decode_single_query(text)
    print(f"Translation for '{text}': {translation}")
    return jsonify({"translation": translation})

if __name__ == "__main__":
    app.run(debug=True, port=8080)