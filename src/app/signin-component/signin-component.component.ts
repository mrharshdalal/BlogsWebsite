import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninService } from './signin.service';

@Component({
  selector: 'app-signin-component',
  templateUrl: './signin-component.component.html',
  styleUrls: ['./signin-component.component.css']
})
export class SigninComponentComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';


  constructor(
    private signinService: SigninService,
    private router: Router
    ) {}

  signIn(): void {
    this.signinService.signIn(this.username, this.password).subscribe(
      (response) => {
        // Handle successful sign-in (e.g., store the token and navigate to a protected route)
        console.log('Sign-in success:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle sign-in error (e.g., display an error message)
        console.error('Sign-in error:', error);
        this.errorMessage = 'Authentication failed. Please check your credentials.';

      }
    );
  }
}
