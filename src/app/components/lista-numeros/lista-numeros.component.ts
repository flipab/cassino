import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Numeros } from 'src/app/models/numeros';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css'],
})
export class ListaNumerosComponent implements OnInit {

  @Output()
  public numeroSelecionado: EventEmitter<Numero> = new EventEmitter();



  public numeros: Numeros[] = [
    new Numeros(1, 'As'),
    new Numeros(2, 'Dois'),
    new Numeros(3, 'Três'),
    new Numeros(4, 'Quatro'),
    new Numeros(5, 'Cinco'),
    new Numeros(6, 'Seis'),
    new Numeros(7, 'Sete'),
    new Numeros(8, 'Oito'),
    new Numeros(9, 'Nove'),
    new Numeros(10, 'Dez'),
    new Numeros(11, 'Valete'),
    new Numeros(12, 'Dama'),
    new Numeros(13, 'Rei'),

    constructor() {
    }

    ngOnInit(): void {
    }


    public selecionaNumero(numero: Numero) {
      this.numeroSelecionado.emit(numero);
    }

