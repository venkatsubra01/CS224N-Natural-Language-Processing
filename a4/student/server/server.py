from flask import Flask, jsonify, request
from flask_cors import CORS
import sys
import os
# Get the absolute path to the server.py file
server_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(server_dir)
if parent_dir not in sys.path:
    sys.path.insert(0, parent_dir)

os.chdir(parent_dir) # Go to parent directory so that model params can be loaded correctly

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
    app.run(debug=True, port=8080, use_reloader=False) # Use reloader=False to prevent the server from restarting when we change the working directory to the parent