import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,BienvenidoComponent,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");;
  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  login(){
    if(this.usuario.nombre == 'fgaleano' && this.usuario.clave == '1234'){
      this.router.navigate(['/bienvenido']);
    }else{
      this.router.navigate(['/error']);
    }
  }

}
