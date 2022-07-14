from fastapi import FastAPI
from routes.blogs_route import blog_api_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(blog_api_router)


