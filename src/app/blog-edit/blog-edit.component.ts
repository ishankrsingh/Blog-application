//import { Component, OnInit } from '@angular/core';

import { Component, OnInit, OnDestroy } from '@angular/core';

//import route relate code
import{ActivatedRoute , Router} from '@angular/router';
import { BlogService } from '../blog.service';

import{BlogHttpService} from "../blog-http.service";
import { error } from 'protractor';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit,OnDestroy {

  //empty variable
  public currentBlog;

  public possibleCategories =["Comedy","Drama","Action","Technology"];
  
  constructor(private _route: ActivatedRoute,private router: Router,public blogService:BlogService,public blogHttpService:BlogHttpService,private toastr: ToastrService) {
    console.log("blog-edit constructor is called");
   }

  ngOnInit():void {
    console.log("blog-edit ngOnInitCalled");
    //getting blog id from the route
    let myBlogId=this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    //calling the function to get the blog with this BlogId out of the overall array
   // this.currentBlog=this.blogService.getSingleBlogInformation(myBlogId);
    //console.log(this.currentBlog);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
         
       data =>{
         console.log("blog-edit data called");
         console.log(data);
         this.currentBlog=data["data"];
       },
       error =>{
        //console.log("blog-view error called");
         console.log("some error occured");
         console.log(error.errorMessage)
       }

    )
  }
  
 public editThisBlog(): any{

  this.blogHttpService.editBlog(this.currentBlog.blogId,this.currentBlog).subscribe(

    data =>{
      console.log(data);
      this.toastr.success('Blog edited successfully', 'Success!');
      setTimeout(()=>{
        this.router.navigate(['/blog',this.currentBlog.blogId]);
      },1000)
    },
    error=>{
      console.log("some error occured");
      console.log(error.errorMessage);
      this.toastr.error('Some error occured ','Error');
    }

  )
 }

  ngOnDestroy(): void {
    console.log("blog-edit is  destroyed");
  }

}
