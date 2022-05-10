from flask_restful import Resource
from flask_jwt_extended import jwt_required, current_user


class Profile(Resource):
    @jwt_required()
    def get(self, username):
        return {
            "currentUserId": current_user.id,
            "username": username,
            "userBirthday": str(current_user.birthday)
        }, 200


    