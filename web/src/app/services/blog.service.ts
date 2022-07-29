import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Blog {
  title: string
  description : string
  completed : boolean
  date : string
  img : string 
  author : string
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }
  
  getAllBlogs(){
    return this.http.get('http://localhost:8000')
  }

  getBlog(id : string){
    return this.http.get(`http://localhost:8000/${id}`)
  }

  createBlog(blog : Blog) {
    const body=JSON.stringify(blog);
    console.log(body)
    return this.http.post('http://localhost:8000',
      {
        body
      },
    )
  }
}
