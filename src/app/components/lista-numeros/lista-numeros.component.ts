import { Component, OnInit } from '@angular/core';
import { Numeros } from 'src/app/models/numeros';

@Component({
  selector: 'app-lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css'],
})
export class ListaNumerosComponent implements OnInit {

  public numeros: Numeros[] = [
    new Numero(

      ),

  constructor() { }

  ngOnInit(): void {
  }

}
