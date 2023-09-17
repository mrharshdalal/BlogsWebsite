import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { SigninComponentComponent } from './signin-component/signin-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { HomePageComponentComponent } from './home-page-component/home-page-component.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routes: Routes = [
  { path: '', component: LandingComponentComponent },   
  { path: 'signin', component: SigninComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'home', component: HomePageComponentComponent },
  { path: 'createblog', component: CreateBlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
