import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HomeComponent,RegistroComponent],
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
    }).catch((e) => console.log(e)){
      this.loginExitoso = 0;
      console.log("fallo");

    }
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
