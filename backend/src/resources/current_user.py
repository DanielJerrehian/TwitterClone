from flask_restful import Resource
from flask_jwt_extended import jwt_required, current_user


class CurrentUser(Resource):
    @jwt_required()
    def get(self):
        return {"user": current_user}, 201