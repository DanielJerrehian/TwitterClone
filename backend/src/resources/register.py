from flask import request
from flask_restful import Resource
from werkzeug.security import generate_password_hash
from datetime import datetime

from backend.src.models.db import db
from backend.src.models.models import User


class Register(Resource):
    def post(self):
        data = request.json
        existing_user = User.query.filter(User.username == data["username"]).first()
        if existing_user:
            return {"message": "A user with that username already exists"}, 400
        else:
            email = data["email"].lower()
            hashed_password = generate_password_hash(password=data["password"], salt_length=10)
            birthday = datetime.strptime(data["userBirthday"], "%m-%d-%Y").date()
            user = User(email=email, username=data["username"], password=hashed_password, birthday=birthday, profile_picture=data["profilePicture"])
            db.session.add(user)
            db.session.commit()
            return {"message": "User created succesfully."}, 201