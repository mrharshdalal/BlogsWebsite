import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { CreateBlogComponentComponent } from './create-blog-component/create-blog-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponentComponent,
    SignupComponentComponent,
    LandingComponentComponent,
    CreateBlogComponentComponent,
    HomePageComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
