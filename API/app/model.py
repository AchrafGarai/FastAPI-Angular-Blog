
# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel

class Blog(BaseModel):
    title: str
    description: str