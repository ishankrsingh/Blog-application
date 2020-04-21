import { Injectable } from '@angular/core';

//Importing http clients to make http requests
//import { HttpClient } from '@angular/common/http';
import{HttpClient,HttpErrorResponse} from '@angular/common/http';
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
  public authToken='?authToken=YjUzMGMwMmRiNDJkYTYwM2U4N2NmMDU2NTAzY2YzNTcyNDIxZjg5M2MzZTY5OGQwNDJmYTRmNmM4NGM0OWQxZWFkMzM4MDVjNzg1NmQwNGU4NzA2MTk5MGVmNzk0Y2M1ZGY5Mzg2MTEyYjRhZmJhYTJhNDY2NGQ0NjU4ZjIwZDkwMTc2Yzg=';


  constructor(private _http:HttpClient) {
    console.log("blog-http service was called");
   }
   
//exception handler
private handleError(err:HttpErrorResponse){
  console.log("Handle error http calls ");
  console.log(err.message);
  return Observable.throw(err.message)
}

   public getAllBlogs():any{

    let myResponse=this._http.get(this.baseUrl+'/all'+this.authToken);
    console.log(myResponse);
    return myResponse;
    
  }

  //method to get a particular blog
  public getSingleBlogInformation(currentBlogId):any {
  
   let myResponse=this._http.get(this.baseUrl + '/view' + '/' + currentBlogId + this.authToken);
  return myResponse;
  }
  //end get blog information function

  public createBlog(blogData):any {
    
    let myResponse= this._http.post(this.baseUrl + '/create' + this.authToken,blogData);
    return myResponse;
  }
  //end create blog
 
  public deleteBlog(blogId):any{

    let data={};
    let myResponse=this._http.post(this.baseUrl + '/' + blogId + '/delete' + this.authToken,data);
    return myResponse;
  }
  //end delete blog

  public editBlog(blogId,blogData)
  {
    let myResponse=this._http.put(this.baseUrl + '/' + blogId + '/edit' + this.authToken,blogData);
    return myResponse;
  }

}
