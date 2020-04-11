import { Component, OnInit } from '@angular/core';

//import route relate code
import{ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  //empty variable
  public currentBlog;

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
  
  constructor(private _route: ActivatedRoute,private router: Router) {
    console.log("constructor is called");
   }

  ngOnInit():void {
    console.log("ngOnInitCalled");
    //getting blog id from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this BlogId out of the overall array
    this.getSingleBlogInformation(myBlogId);
  }

  public getSingleBlogInformation(currentBlogId):any {
    //using a for of loop here from typescript

    for(let blog of this.allBlogs)
    {
      if(blog.blogId==currentBlogId)
      {this.currentBlog=blog;
      }
    }
    console.log(this.currentBlog);
  }//end get blog information function

}
