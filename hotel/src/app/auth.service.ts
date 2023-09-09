import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    console.log(username+"1");
    return this.http.post('http://localhost:3000/api/users/login', credentials);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
