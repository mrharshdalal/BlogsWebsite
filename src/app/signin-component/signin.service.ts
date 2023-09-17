
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SigninService {
  private apiUrl = 'http://localhost:8000/api/auth/login/';

  constructor(private http: HttpClient) {}

  signIn(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl, body);
  }
}

