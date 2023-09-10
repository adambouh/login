// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AccessControlResolver } from './Access.Control'; // Import the new LoginGuard
import { LogGuard } from './log.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to '/home'
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: '/login',
    component: LoginComponent,
    canActivate: [LogGuard]  // Use the LoginGuard for the login route
  },
  { path: '**', redirectTo: '/home' },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export default routes;