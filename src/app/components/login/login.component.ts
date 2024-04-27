import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from '../error/error.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { Firestore,addDoc,collection, collectionData } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

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
  loginsCollection: any[] = [];
  countLogins : number = 0;
  private sub !: Subscription;

  constructor(private router: Router, private firestore : Firestore) {}

  goTo(path: string) {
    this.router.navigate([path]);
  }

  login(){
    let col = collection(this.firestore,'logins');
    addDoc(col,{ fecha: new Date(),"user":this.usuario})
    if(this.usuario.nombre == 'fgaleano' && this.usuario.clave == '1234'){
      this.loginExitoso = 1;
      this.router.navigate(['/home']);
    }else{
      this.loginExitoso = 0;
      console.log("fallo");
      //this.router.navigate(['/error']);
    }

  }

  getData(){
    let col = collection(this.firestore,'logins');
    const observable = collectionData(col);
    this.sub = observable((respuesta:any) => {

      //Actualizamos nuestro array
      this.loginsCollection = respuesta;

      //Actualizamos la cantidad de registros que contiene la colección (Ejemplo propuesto en clase)
      this.countLogins = this.loginsCollection.length;

      console.log(respuesta);
    })

  }

  closeError(){
    this.loginExitoso = -1;
  }

}
