'''
This script sets up a basic flask server to run the chess app. The server loads all assets 
and validates moves by the client. Client interaction is implemented using javascript.
'''

from flask import Flask, render_template, redirect, url_for, request, jsonify
import json
import csv

app = Flask(__name__)
app.config['DEBUG'] = True

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
