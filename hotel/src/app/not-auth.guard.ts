// not-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isLoggedIn()) {
      // User is not authenticated, allow access
      return true;
    } else {
      // User is already authenticated, redirect to home page
      this.router.navigate(['/home']);
      return false;
    }
  }
}
