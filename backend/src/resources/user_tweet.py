from flask_restful import Resource
from flask_jwt_extended import jwt_required


class UserTweet(Resource):
    def get(self, username, tweet_id):
        pass
    
    @jwt_required()
    def post(self, username):
        pass
    
    @jwt_required()
    def put(self, username, tweet_id):
        pass
    
    @jwt_required()
    def delete(self, username, tweet_id):
        pass