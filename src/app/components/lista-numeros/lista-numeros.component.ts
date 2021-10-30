import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Numero } from 'src/app/models/numeros';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css'],
})
export class ListaNumerosComponent implements OnInit {

  @Output()
  public numeroSelecionado: EventEmitter<Numero> = new EventEmitter();



  public numeros: Numero[] = [
    new Numero(1, 'As'),
    new Numero(2, 'Dois'),
    new Numero(3, 'Três'),
    new Numero(4, 'Quatro'),
    new Numero(5, 'Cinco'),
    new Numero(6, 'Seis'),
    new Numero(7, 'Sete'),
    new Numero(8, 'Oito'),
    new Numero(9, 'Nove'),
    new Numero(10, 'Dez'),
    new Numero(11, 'Valete'),
    new Numero(12, 'Dama'),
    new Numero(13, 'Rei'),
  ];

    constructor() {
    }

    ngOnInit(): void {
    }


    public selecionaNumero(numero: Numero) {
      this.numeroSelecionado.emit(numero);
    }
}
