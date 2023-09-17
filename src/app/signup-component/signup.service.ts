import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost:8000/api/auth/register/';

  constructor(private http: HttpClient) {}

  registerUser(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
