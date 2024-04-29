import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,HomeComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");
  loginExitoso: number = -1;

  constructor(private router: Router, private firestore : Firestore) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  login(){
    let col = collection(this.firestore, 'usuarios');

  if(this.usuario.nombre == 'fgaleano' && this.usuario.clave == '1234'){
     addDoc(col, { fecha: new Date(), "usuario": this.usuario.nombre})
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
