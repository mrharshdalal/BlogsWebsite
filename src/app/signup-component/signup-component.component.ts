import { Component } from '@angular/core';
import { SignupService } from './signup.service';
// import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent {
  formData = {
    username: '',
    password: '',
  };

  constructor(private signupService: SignupService) {}

  registerUser() {
    this.signupService.registerUser(this.formData).subscribe(
      (response) => {
        // Handle success, e.g., navigate to a success page or show a message.
        console.log('Registration success:', response);
      },
      (error) => {
        // Handle error, e.g., display error messages.
        console.error('Registration error:', error);
      }
    );
  }
}
