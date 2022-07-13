def blog_serializer(blog) -> dict:
    return {
        "id": str(blog["_id"]),
        "title": blog["title"],
        "description": blog["description"],
    }

def blogs_serializer(blogs) -> list:
    return [blog_serializer(blog) for blog in blogs]