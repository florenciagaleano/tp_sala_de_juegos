import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../error/error.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HomeComponent,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");
  loginExitoso: number = -1;

  constructor(private router: Router) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  login(){
    if(this.usuario.nombre == 'fgaleano' && this.usuario.clave == '1234'){
      this.loginExitoso = 1;
      this.router.navigate(['/home']);
    }else{
      this.loginExitoso = 0;
      console.log("fallo");
      //this.router.navigate(['/error']);
    }
  }

  closeError(){
    this.loginExitoso = -1;
  }

}
