import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';


@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario: Usuario = new Usuario("", "");
  error: number = 0;

  constructor(public auth: Auth) {
  }

  registrarse() {
    createUserWithEmailAndPassword(this.auth, this.usuario.mail, this.usuario.clave).then((res) => {
      if (res.user.email !== null) this.usuario.mail = res.user.email;

    }).catch((e) => {
      this.error = 1;
    });
  }
}
