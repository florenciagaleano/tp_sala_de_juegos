import { Component } from '@angular/core';
import { CartasService } from '../../services/cartas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartas',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent {
  currentCard: any;
  nextCard: any;
  intentos = 0;
  intentosFallidos = "💗 💗 💗 💗 💗 💗 💗 💗 💗 "
  mayorSeleccionado = false;
  perdio = false;
  
  constructor(private cardService: CartasService) { }

  ngOnInit(): void {
    this.getNewCard();
  }

  async getNewCard() {
    this.currentCard = await this.cardService.getCard();
    this.nextCard = await this.cardService.getCard();
  }

  async seleccionarMayor() {
    this.mayorSeleccionado = true;
    await this.evaluateGuess();
  }

  async seleccionarMenor() {
    this.mayorSeleccionado = false;
    await this.evaluateGuess();
  }

  async evaluateGuess() {
    const result = await this.cardService.cardIsHigher(this.currentCard, this.nextCard);
    if(!((result && this.mayorSeleccionado) || (!result && !this.mayorSeleccionado))){
      this.intentos++;
    }
    this.currentCard = this.nextCard;
    this.nextCard = await this.cardService.getCard();
    this.actualizarVidas();
  }

  actualizarVidas(){
    this.intentosFallidos = "";
    for (let index = 0; index < 9 - this.intentos; index++) {
      this.intentosFallidos += "💗 ";
    }
  }


}