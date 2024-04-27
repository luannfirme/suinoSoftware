import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  badgevisible = false;

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logOut();
  }
  
  badgevisibility() {
    this.badgevisible = true;
  }
}
