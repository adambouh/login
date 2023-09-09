import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  template: `

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel';
}
