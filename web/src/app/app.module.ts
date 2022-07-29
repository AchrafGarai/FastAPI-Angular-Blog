import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import {HttpClientModule} from '@angular/common/http';
import { AddBlogComponent } from './components/add-blog/add-blog.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BlogListComponent,
    BlogComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
