import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateBlogService {
  private apiUrl = 'http://localhost:8000/api/blog/createblog/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createBlogPost(data: any) {
    return this.http.post(`${this.apiUrl}`, data);
  }
  
}
