from sqlalchemy.orm import backref

from backend.src.models.db import db


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), unique=True, nullable=False)
    username = db.Column(db.String(30), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    birthday = db.Column(db.Date, nullable=False)
    tweets = db.relationship('Tweet', uselist=True, backref=backref('user', uselist=False), lazy=True)
    

class Tweet(db.Model):
    __tablename__ = "tweet"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    body = db.Column(db.String(140), nullable=False)
    
