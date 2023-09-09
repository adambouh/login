import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class users {
  private baseUrl = 'http://localhost:3000'; // Replace with your server URL

  constructor(private http: HttpClient) {}

  createUser(user: any) {
    return this.http.post(`${this.baseUrl}/api/users`, user);
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}/api/users`);
  }
  
  login(username: string, password: string) {
      const credentials = { username, password };
      return this.http.post(`${this.baseUrl}/api/users/login`, credentials);
    }
  
  
  // Define methods for other CRUD operations as needed
}
