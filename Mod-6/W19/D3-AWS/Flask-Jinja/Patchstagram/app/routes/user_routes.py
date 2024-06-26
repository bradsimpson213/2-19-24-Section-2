from flask import Blueprint, render_template


users = Blueprint("users", __name__, url_prefix="/users")
# print("in users bp", __name__)


@users.route("/all")
def get_all_users():
    return "<h1>Users will one day exist here!</h1>"