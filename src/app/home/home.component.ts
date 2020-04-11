//this is a be default statement . It is like headerfile in C++ ..

import { Component, OnInit } from '@angular/core';

//This is know as decorator
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//simple class
export class HomeComponent implements OnInit {

  //declare a dummy blog variable here
  public allBlogs=[
    {
      "blogId":"1",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":["comedy","humour"],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"this is blog body ",
      "description": "this is blog 1 description",
      "title":"This is blog 1"
    },
    {
      "blogId":"2",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":["comedy","humour"],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"<h1>this is big text</h1><p>this is small text</p> ",
      "description": "this is the description of an example blog",
      "title":"This is an example log"
    },
    {
      "blogId":"3",
      "lastModified":"2017-10-20T12:20:47.854Z",
      "created":"2017-10-20T12:20:47.854Z",
      "tags":["dark","horror"],
      "author":"Admin",
      "category":"Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml":"this is blog body ",
      "description": "this is blog 3 description",
      "title":"This is blog 3"
    }
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
