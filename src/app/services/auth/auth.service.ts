import { Injectable } from '@angular/core';
import { authState } from '@angular/fire/auth';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User | null>;

  constructor(private auth: Auth) {
    this.user$ = authState(this.auth);
  }

  crearUsuario(email : string, clave : string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, clave);
  }

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      const user = this.auth.currentUser;
      resolve(user);
    });
  }

  signIn(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }

}
