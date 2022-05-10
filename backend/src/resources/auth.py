from flask import request
from flask_restful import Resource
from werkzeug.security import check_password_hash
from flask_jwt_extended import create_access_token, create_refresh_token, get_jwt_identity

from backend.src.models.models import User


class Auth(Resource):
    def post(self):
        data = request.json
        user = User.query.filter(User.email == data["email"]).first()
        if not user:
            return {"message": "No user found"}, 400
        else:
            passwords_match = check_password_hash(pwhash=user.password, password=data["password"])
            if passwords_match:
                access_token = create_access_token(identity=user.email)
                refresh_token = create_refresh_token(identity=user.email)
                return {"access_token": access_token, "refresh_token": refresh_token}, 200