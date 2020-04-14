import { Injectable } from '@angular/core';

//Importing http clients to make http requests
import { HttpClient } from '@angular/common/http';
//import{HttpClient,HttpErrorResponse} from '@angular/common/http';
//import{HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';
import {tap} from 'rxjs/operators';

/*import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';*/

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl='https://blogapp.edwisor.com/api/v1/blogs';
  public authToken='authToken=YjUzMGMwMmRiNDJkYTYwM2U4N2NmMDU2NTAzY2YzNTcyNDIxZjg5M2MzZTY5OGQwNDJmYTRmNmM4NGM0OWQxZWFkMzM4MDVjNzg1NmQwNGU4NzA2MTk5MGVmNzk0Y2M1ZGY5Mzg2MTEyYjRhZmJhYTJhNDY2NGQ0NjU4ZjIwZDkwMTc2Yzg=';


  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");
   }
   
   public getAllBlogs():any{

    let myResponse=this._http.get(this.baseUrl+'/all?'+this.authToken);
    console.log(myResponse);
    return myResponse;
    
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any {
  
   
  }//end get blog information function

}
