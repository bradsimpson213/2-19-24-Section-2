from flask import Flask, render_template, redirect 
from .config import Config
from .posts import posts
from .routes.post_routes import posts
from .routes.user_routes import users
from .models import db 
from flask_migrate import Migrate
from .seeds import seed_commands
from flask_wtf.csrf import generate_csrf
import os

app = Flask(__name__)

app.config.from_object(Config)
db.init_app(app)
Migrate(app, db)

app.cli.add_command(seed_commands)
app.register_blueprint(posts, url_prefix="/api/posts")
app.register_blueprint(users, url_prefix="/api/users")

# print("in dudner init", __name__)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response



@app.route("/")
def index():
    """render the home page"""
    return render_template("index.html")
    # return redirect("/another")


@app.route("/another")
def another_route():
    return "<h1>This is another route!</h1>"



