import { Component } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router){}

  irAJuego(juego : string){
    this.router.navigate(['/' + juego]);
  }
}
