from flask import Blueprint, render_template, redirect
from ..posts import posts as seed_posts
from ..forms.post_form import PostForm
from datetime import datetime
from random import randint


posts = Blueprint('posts', __name__)


print("in posts bp", __name__)

"/posts/all"
@posts.route("/all")
def get_all_posts():
    """route the queries for all posts and then returns them in a template"""
    # QUERY IN HERE
    # all_posts = Post.query.all()
    # sorted_posts = sorted(seed_posts, key=lambda post: post["date"], reverse=True)
    return render_template('feed.html', posts=seed_posts)


@posts.route("/<int:id>")
def get_post_by_id(id):
    """return a single post by its id"""
    # one_post = Post.query.get(id)
    one_post = [post for post in seed_posts if post["id"] == id]
    print(one_post)
    return render_template("feed.html", posts=one_post)



@posts.route("/new", methods=["GET", "POST"])
def create_new_post():
    """render an empty form on get requests, validates and submits form on post requests"""

    form = PostForm()


    if form.validate_on_submit():
        new_post = {
            "id": len(seed_posts) + 1,
            "caption": form.data["caption"],
            "image": form.data["image"],
            "author": form.data['author'],
            "date": datetime.now(),
            "likes": randint(1, 10)
        }
        print(new_post)
        seed_posts.append(new_post)
        return redirect("/posts/all")

    if form.errors:
        print(form.errors)
        return render_template("post_form.html", form=form, errors=form.errors)

    return render_template("post_form.html", form=form, errors=None)




@posts.route("/update/<int:id>", methods=["GET", "POST"])
def update_post(id):
    """"will generate an update post form on get requests and 
    validate/save on post requests"""

    form = PostForm()

    if form.validate_on_submit():
        post_to_update = [post for post in seed_posts if post["id"] == id]

        if post_to_update:
            update_dict = post_to_update[0]
            update_dict["caption"] = form.data["caption"]
            update_dict["author"] = form.data["author"]
            update_dict['image'] = form.data["image"]

        return redirect(f"/posts/{id}")    



    elif form.errors:
        pass

    else:
        current_data = [post for post in seed_posts if post["id"] == id]        
        print(current_data)
        form.process(data=current_data[0])
        return render_template("post_form.html", form=form, type="update", id=id, errors=None)






@posts.route("/delete/<int:id>")
def delete_post(id):
    """will delete a given post by its ID"""
    post_to_delete = [post for post in seed_posts if post["id"] == id]
    print(post_to_delete)
    if post_to_delete:
        seed_posts.remove(post_to_delete[0])
    return redirect("/posts/all")