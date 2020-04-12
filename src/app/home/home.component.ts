//this is a be default statement . It is like headerfile in C++ ..

import { Component, OnInit, OnDestroy } from '@angular/core';

// ..means its going one folder back to find blog service as it resides in app folder
import { BlogService } from '../blog.service';
import { BlogHttpService } from "../blog-http.service";

//This is know as decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//simple class
export class HomeComponent implements OnInit,OnDestroy {

  public allBlogs;

  constructor(public blogService:BlogService) { 
    console.log("home component constructor is called");
  }

  ngOnInit(): void {
    console.log("home component onInit is called");
  
    this.allBlogs=this.blogService.getAllBlogs();
    console.log(this.allBlogs);

  }
  ngOnDestroy(): void {
    console.log("home component is destroyed");
  }

}
