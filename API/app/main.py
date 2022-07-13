from typing import Union

from fastapi import FastAPI

from model import Blog

from database import (
    fetch_all_blogs,
    create_blog2,
)

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}


@app.get("/api/blog")
async def get_blog():
    response = await fetch_all_blogs()
    return response

@app.post("/api/blog/", response_model=Blog)
async def post_blog(blog: Blog):
    response = await create_blog(blog.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")


@app.post("/blog")
async def get_blog(blog: Blog):
    response = await create_blog2(blog)
    return response