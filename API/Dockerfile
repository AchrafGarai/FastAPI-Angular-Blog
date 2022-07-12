# 
FROM python:3.9

# 
WORKDIR /code

# 
COPY ./API/requirements.txt /code/requirements.txt

# 
EXPOSE 8000

# 
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt


# 
COPY ./API/app /code/app

# 
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
