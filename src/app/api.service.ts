import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Base URL of your Django API

  constructor(private http: HttpClient) {}

  // Define methods for making API requests here
  registerUser(userData: any) {
    const url = `${this.apiUrl}/auth/register/`;
    return this.http.post(url, userData);
  }
}
