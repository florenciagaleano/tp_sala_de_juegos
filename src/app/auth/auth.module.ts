import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { LogoutComponent } from '../components/logout/logout.component';
import { LoginComponent } from '../components/login/login.component';
import { RegistroComponent } from '../components/registro/registro.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    LogoutComponent,
    LoginComponent,
    RegistroComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, // Agrega FormsModule a los imports
    RouterOutlet
  ]
})
export class AuthModule { }
