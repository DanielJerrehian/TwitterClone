from backend.src.authentication.jwt import jwt
from backend.src.models.models import User


@jwt.user_lookup_loader
def user_lookup_callback(_jwt_header, jwt_data):
    identity = jwt_data["sub"]
    return User.query.filter(User.email == identity).first()