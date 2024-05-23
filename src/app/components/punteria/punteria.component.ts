import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Punteria } from '../../models/punteria';

@Component({
  selector: 'app-punteria',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './punteria.component.html',
  styleUrl: './punteria.component.css'
})
export class PunteriaComponent {
  objetivosAleatorios: any = 'display:none;';
  comenzarJuego: string = 'display:block;';
  classObjetivo:string = '';

  objetivosJugados:number = 0

  myTimeout!: ReturnType<typeof setTimeout>;
  timerValue:number = 3000

  btnsDeshabilidatos: boolean = false;
  intentosFallidos: string = "💗 💗 💗 ";
  intentos: number = 0;
  perdio: boolean = false;
  gano: boolean = false;
  contador: number = 0;

  partidaPunteria = new Punteria()

  constructor(){}

  ngOnInit(): void {
    this.partidaPunteria.intentosTotales = 5
    this.partidaPunteria.aciertos = 0
    this.partidaPunteria.dificultad = 'facil'
  }

  ClickFueraDeObjetivo(event: MouseEvent) {
    if ((event.target as HTMLElement).id !== 'target') {
      this.intentos++;
      this.actualizarVidas();
    }

    this.CrearObjetivoAleatorio(this.partidaPunteria.dificultad, 1);
  }

  ClickEnObjetivo() {

    if(this.myTimeout)  clearTimeout(this.myTimeout);

    this.contador++;
    this.actualizarVidas();
    this.CrearObjetivoAleatorio(this.partidaPunteria.dificultad, 1);
  
  }

  ComenzarJuego() {
    this.IniciarJuego()
    this.CrearObjetivoAleatorio(this.partidaPunteria.dificultad, 0);
  }

  IniciarJuego(){
    this.btnsDeshabilidatos =true;
    this.comenzarJuego = 'display:none;'
    this.objetivosAleatorios = 'display:block;';
    this.classObjetivo = this.partidaPunteria.dificultad
    this.objetivosJugados = 0
    this.partidaPunteria.aciertos = 0
  }

  CrearObjetivoAleatorio(tipoDeJuego:string, acerto:number){
    console.log(acerto);
    if(acerto == -1) this.intentos++;
    this.actualizarVidas();
    
    
    this.timerValue = 1000          
    this.DefinirLugarDelObjetivo(95, 97)

    this.objetivosJugados ++;   
   
  }

  DefinirLugarDelObjetivo(top:number, left:number){
    this.objetivosAleatorios = 'display:block;'
    this.objetivosAleatorios += 'left:' + this.NumeroAleatorio(left) + '%;'
    this.objetivosAleatorios += 'top:' + this.NumeroAleatorio(top) + '%;'
  }

  NumeroAleatorio(numMax:number){
   return  Math.floor(Math.random() * numMax) 
  }

  actualizarVidas(){
    this.intentosFallidos = "";

    if(this.intentos == 5){
      this.perdio = true;
    }else if(this.contador == 30){
      this.gano = true;
    }

    for (let index = 0; index < 4 - this.intentos; index++) {
      this.intentosFallidos += "💗 ";
    }
  }

}
