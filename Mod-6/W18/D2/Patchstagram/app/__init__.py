from flask import Flask, render_template, redirect 
from .config import Config
from .posts import posts
from .routes.post_routes import posts
from .routes.user_routes import users


app = Flask(__name__)

app.config.from_object(Config)

app.register_blueprint(posts, url_prefix="/posts")
app.register_blueprint(users)

# print("in dudner init", __name__)


@app.route("/")
def index():
    """render the home page"""
    return render_template("index.html")
    # return redirect("/another")



@app.route("/another")
def another_route():
    return "<h1>This is another route!</h1>"



# @app.route("/all")
# def get_all_posts():
#     """route the queries for all posts and then returns them in a template"""
#     # QUERY IN HERE
#     # all_posts = Post.query.all()
#     return render_template('feed.html', posts=posts)


# @app.route("/<int:id>")
# def get_post_by_id(id):
#     """return a single post by its id"""
#     # one_post = Post.query.get(id)
#     one_post = [post for post in posts if post["id"] == id]
#     print(one_post)
#     return render_template("feed.html", posts=one_post)

