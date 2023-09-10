import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authTokenKey = 'authToken';
  private tokenExpirationKey = 'tokenExpiration';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };
    return this.http.post('http://localhost:3000/api/users/login', credentials)
      .pipe(
        tap((response: any) => {
          // Authentication succeeded, store the authentication token and its expiration date
          localStorage.setItem(this.authTokenKey, response.token); // Replace 'token' with the actual token property name from the server response
          localStorage.setItem(this.tokenExpirationKey, this.calculateTokenExpiration(response.token).toString());
        }),
        catchError((error) => {
          // Handle login error
          return throwError(error);
        })
      );
  }

  logout() {
    // Clear authentication-related data from localStorage
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.tokenExpirationKey);
  }

  isLoggedIn(): boolean {
    return this.isValidSession();
  }

  private isValidSession(): boolean {
    const authToken = localStorage.getItem(this.authTokenKey);
    const tokenExpiration = localStorage.getItem(this.tokenExpirationKey);

    if (authToken && tokenExpiration) {
      const expirationDate = new Date(tokenExpiration);
      return expirationDate > new Date(); // Check if the token is not expired
    }

    return false; // No valid session data found
  }

  private calculateTokenExpiration(token: string): Date {
    try {
      const decodedToken: any = JSON.parse(atob(token.split('.')[1]));
      if (decodedToken && decodedToken.exp) {
        return new Date(decodedToken.exp * 1000); // Convert to milliseconds
      }
    } catch (error) {
      console.error('Error parsing token expiration:', error);
    }
    return new Date(0); // Default to expired date if parsing fails
  }
}
