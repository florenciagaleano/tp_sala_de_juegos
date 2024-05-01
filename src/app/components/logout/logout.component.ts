import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})

export class LogoutComponent {
  constructor(private router: Router) {}

  goToLogin() {
    console.log("deberia ir al login");
    this.router.navigate(["/login"]);
  }

}
