import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ToastrModule} from 'ngx-toastr';
//import {ToastModule} from 'ng2-toastr/ng2-toastr';   

//import '~ngx-toastr/toastr';

import{FormsModule} from '@angular/forms';

//router module used for setting up the application level routing
import {RouterModule,Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';



//import statement for service
import { BlogService } from './blog.service';
import { BlogHttpService } from './blog-http.service';
import{HttpClient} from '@angular/common/http';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
    //HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //routerModule forRoot method to declare the possible routes in application
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'blog/:blogId',component:BlogViewComponent},
      {path: 'create',component:BlogCreateComponent},
      {path:'edit/:blogId',component:BlogEditComponent},
      {path: '**',component:NotFoundComponent}
    ])

  ],
  providers: [BlogService,BlogHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
