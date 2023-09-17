import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponentComponent,
    SignupComponentComponent,
    LandingComponentComponent,
    CreateBlogComponent,
    HomePageComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
