from .db import db


likes = db.Table(
    "likes",
    db.Model.metadata,
    db.Column("user_id", db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column("post_id", db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)

