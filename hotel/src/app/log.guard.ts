// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LogGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(2);
    if (this.authService.isLoggedIn()) {
      // User is already authenticated, redirect to another page (e.g., home)
      this.router.navigate(['/home']);
      return false; // Prevent access to the login page
    } else {
      // User is not authenticated, allow access to the login page
      return true;
    }
  }
}