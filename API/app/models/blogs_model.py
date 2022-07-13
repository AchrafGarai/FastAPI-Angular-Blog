from pydantic import BaseModel

class Blog(BaseModel):
    title: str
    description: str
    completed: bool
    date: str
    img : str
    author : str

