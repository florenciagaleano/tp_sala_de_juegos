import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

export class LogoutComponent {

  constructor(private authService : AuthService, private router: Router) {}

  goToLogin() {
    this.authService.signOut();
    this.router.navigate(["/login"]);
  }

}
