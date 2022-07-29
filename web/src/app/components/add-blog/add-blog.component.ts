import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

interface Blog {
  title: string
  description : string
  completed : boolean
  date : string
  img : string 
  author : string
}

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  Data : any 
  constructor(private blogService : BlogService) { }

  ngOnInit(): void {
    const sampleBlog = {
      title : "hhhh",
      description : "hhhh",
      completed : true,
      date : "string",
      img : "hhhh" ,
      author : "hhhh",
    }
    this.blogService.createBlog(sampleBlog).subscribe((data) => {
      this.Data = data
    })
  }

}
