from fastapi import FastAPI
from routes.blogs_route import blog_api_router

app = FastAPI()

app.include_router(blog_api_router)

