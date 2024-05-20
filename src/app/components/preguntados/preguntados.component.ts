import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas/peliculas.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from '../logout/logout.component';
import { ChatComponent } from '../chat/chat.component';

@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [CommonModule,FormsModule,LogoutComponent,ChatComponent],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.css'
})
export class PreguntadosComponent {

  pregunta: any;
  opciones: string[] = [];
  imagen: string = '';
  correcta: string = '';
  intentosFallidos = "💗 💗 💗 "
  intentos = 0;
  perdio = false;
  gano = false;
  contador = 0;

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.nuevaPregunta();
  }

  nuevaPregunta(){
    this.peliculasService.getPreguntaConOpciones().subscribe((data) => {
      this.pregunta = data;
      this.opciones = data.opciones;
      this.imagen = data.imagen;
      this.correcta = data.correcta;
    });

  }

  verificarRespuesta(opcion: string) {
    if (opcion != this.correcta) {
      this.intentos++;
    }
    this.actualizarVidas();
    this.nuevaPregunta();
  }

  actualizarVidas(){
    this.intentosFallidos = "";

    if(this.intentos == 3){
      this.perdio = true;
    }else if(this.contador == 10){
      this.gano = true;
    }
    this.contador ++;

    for (let index = 0; index < 3 - this.intentos; index++) {
      this.intentosFallidos += "💗 ";
    }
  }


}
