from flask import Flask, render_template
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/getlogin')
def getlogin():
    username = os.getlogin()
    return username

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8080)