import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AccessControlResolver implements Resolve<boolean> {
  constructor(private authService: AuthService) {}

  resolve(): boolean {
    return this.authService.isLoggedIn();
  }
}
