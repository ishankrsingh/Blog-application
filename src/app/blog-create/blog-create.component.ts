import { Component, OnInit } from '@angular/core';


import { BlogHttpService } from '../blog-http.service';
//import { error } from 'protractor';

import{ActivatedRoute, Router}from '@angular/router';
//import{ToastsManager} from 'ng2-toastr/ng2-toastr';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private blogHttpService:BlogHttpService,private _route:ActivatedRoute,private router:Router,private toastr:ToastrService) { 
    
  }

  public blogTitle:string ;
  public blogBodyHtml:string;
  public blogDescription:string;
  public blogCategory:string;
  public possibleCategories =["Comedy","Drama","Action","Technology"]

  ngOnInit(): void {
  }

  public createBlog():any{
    
    let blogData={

      title: this.blogTitle,
      description : this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    //end blog data
    console.log(blogData);

    this.blogHttpService.createBlog(blogData).subscribe(

      data=>{
        console.log("Blog created")
        console.log(data);
        //alert('Blog Posted successfully');
        
        this.toastr.success('Blog Posted successfully!', 'Success!');
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },2000)
      },
      error=>{
        console.log("some error occured");
        console.log(error.errorMessage);
        alert('Some error occured');
        //this.toastr.error('some error occured', 'Error');
      }
    )
  }// end create blog method

}
