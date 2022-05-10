from flask import Flask
from dotenv import load_dotenv
import os

from backend.src.api.api import api
from backend.src.network.cors import cors
from backend.src.authentication.jwt import jwt
from backend.src.models.db import db
from backend.src.models.marshmallow import ma
from backend.src.resources.tweets import Tweets
from backend.src.resources.register import Register
from backend.src.resources.login import Login
from backend.src.resources.user_tweet import UserTweet
from backend.src.resources.profile import Profile
from backend.src.models.models import User


def create_app():
    app = Flask(__name__)
    
    load_dotenv(dotenv_path=".env")
    
    app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")
    app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY")
    app.config["ENV"] = "development"
    app.config["DEBUG"] = True
    app.config["CORS_HEADERS"] = "Content-Type"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    api.add_resource(Tweets, "/timeline")
    api.add_resource(Register, "/register")
    api.add_resource(Login, "/login")
    api.add_resource(Profile, "/<string:username>")
    api.add_resource(UserTweet, "/<string:username>/tweet/<string:id>")

    api.init_app(app)
    cors.init_app(app)
    
    jwt.init_app(app)
    
    # @jwt.user_lookup_loader
    # def user_lookup_callback(_jwt_header, jwt_data):
    #     identity = jwt_data["sub"]
    #     return User.query.filter(User.email == identity).first()
    
    db.init_app(app)
    ma.init_app(app)
    
    return app

