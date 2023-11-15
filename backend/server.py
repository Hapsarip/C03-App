from flask import Flask, request
from flask_cors import CORS
import datetime
import os

x = datetime.datetime.now()

app = Flask(__name__)
CORS (app, resources={r"/*": {"origins": "http://localhost:3000"}})

@app.route("/")
def home():
    return {"message": "Hello from backend"}

@app.route('/upload', methods=['POST'])
def upload():
    file = request.files['file']
    file.save('uploads/' + file.filename)

if __name__ == '__main__':
    app.run(debug=True)