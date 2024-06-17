from flask import Flask 
from .config import Config


app = Flask(__name__)
app.config.from_object(Config)


@app.route("/")
def index():
    """render the home page"""
    return "<h1>Welcome to Patchstagram!</h1>"



print(__name__)