import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");
  loginExitoso: number = -1;

  constructor(private router: Router, private firestore : Firestore, public auth: Auth) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }


  login() {
    let col = collection(this.firestore, 'registros');

    signInWithEmailAndPassword(this.auth, this.usuario.mail, this.usuario.clave).then((res) => {
      addDoc(col, { "fecha": new Date(), "usuario": this.usuario.mail})
      this.loginExitoso = 1;
      this.router.navigate(['/home']);
    }).catch((e) => {
      this.loginExitoso = 0;
      console.log(e);
    });
    
  }

  CloseSession(){
    signOut(this.auth).then(() => {
      console.log(this.auth.currentUser?.email)
    })
  }

  registrarse(){
    this.router.navigate(['/registro']);
  }

  closeError(){
    this.loginExitoso = -1;
  }

}
