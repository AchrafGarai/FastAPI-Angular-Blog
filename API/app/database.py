import motor.motor_asyncio
from model import Blog
from schema import blogs_serializer, blog_serializer
from bson import ObjectId


client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://mongodb:27017/BlogList')
database = client.BlogList
collection = database.blog


async def fetch_all_blogs():
    blogs = []
    cursor = collection.find({})
    async for document in cursor:
        blogs.append(Blog(**document))
    return blogs

async def create_blog(blog):
    document = blog
    result = await collection.insert_one(document)
    return document

async def create_blog2(blog):
    _id = collection.insert_one(dict(blog))
    return blogs_serializer(collection.find({}))
