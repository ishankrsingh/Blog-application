import { Component, OnInit, OnDestroy } from '@angular/core';

//import route relate code
import{ActivatedRoute , Router} from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit,OnDestroy {

  //empty variable
  public currentBlog;

  
  constructor(private _route: ActivatedRoute,private router: Router,public blogService:BlogService) {
    console.log("blog-view constructor is called");
   }

  ngOnInit():void {
    console.log("blog-view ngOnInitCalled");
    //getting blog id from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this BlogId out of the overall array
    this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    console.log(this.currentBlog);
  }
  
  ngOnDestroy(): void {
    console.log("blog-view is  destroyed");
  }

 
}
