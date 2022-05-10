from backend.src.models.marshmallow import ma

from backend.src.models.models import User, Tweet


class TweetSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Tweet
        load_instance = True
        

class UserSchema(ma.SQLAlchemyAutoSchema):
    
    tweets = ma.Nested(TweetSchema)
    
    class Meta:
        model = User
        load_instance = True