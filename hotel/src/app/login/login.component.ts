import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { Document } from 'mongoose';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule, MatFormFieldModule, MatInputModule
  ],
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css','./style.css','./font-awesome.min.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  ngOnInit() {
    // Check the resolved data to determine if the user is authenticated
    const isAuthenticated = this.authService.isLoggedIn();
console.log("a");
    if (isAuthenticated) {
      // User is already authenticated, redirect to another page
      this.router.navigate(['/home']);
    }
  }

  onLogin() {
    this.username = this.applyForm.value.username ?? '';
    this.password = this.applyForm.value.password ?? '';
  
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Login successful, handle the response and navigate to the home page
        console.log('Logged in successfully');
        
            // Login successful, store token in localStorage

            // Redirect to protected route or user profile
         
          
      
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login failure, e.g., show an error message
        console.error('Login failed:', error);
        this.errorMessage = 'Something is wrong with your login credentials.';

      }
    );
  }
}



