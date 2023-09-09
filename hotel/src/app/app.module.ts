import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule here
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './auth.guard';
import { MatCardModule } from '@angular/material/card';


// Import HomeComponent here
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to '/home'
 
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, 
  { path: '**',redirectTo: '/home' }
  // Add more routes as needed
];



export class AppRoutingModule {}
export default routes;
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, // Add HomeComponent to the declarations array
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configure your routes here
    FormsModule,
    HttpClientModule, 
    MatCardModule, // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent],  
  exports: [RouterModule],
})
export class AppModule {}
