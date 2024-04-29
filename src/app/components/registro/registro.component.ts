import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Auth, signInWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: '../LoginComponent/login.component.css'
})
export class RegistroComponent {
  usuario: Usuario = new Usuario("", "");
  error: number = 0;

  constructor(public auth: Auth) {
  }

  registrarse() {
    signInWithEmailAndPassword(this.auth, this.usuario.mail, this.usuario.clave).then((res) => {
      //if (res.user.email !== null) this.loggedUser = res.user.email;
    }).catch((e) => {
      this.error = 1;
    });
  }

}
