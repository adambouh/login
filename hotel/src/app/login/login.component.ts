import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

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

  constructor(private authService: AuthService, private router: Router) {}
  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  onLogin() {
    this.username = this.applyForm.value.username ?? '';
    this.password = this.applyForm.value.password ?? '';
  
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        // Login successful, handle the response and navigate to the home page
        console.log('Logged in successfully');
        
            // Login successful, store token in localStorage
            localStorage.setItem('token', response.token);
            // Redirect to protected route or user profile
         
          
      
        console.log(response);
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle login failure, e.g., show an error message
        console.error('Login failed:', error);
      }
    );
  }
}



