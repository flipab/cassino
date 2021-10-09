import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-naipes',
  templateUrl: './lista-naipes.component.html',
  styleUrls: ['./lista-naipes.component.css']
})
export class ListaNaipesComponent implements OnInit {

  public naipes: Naipe[] = [
    new Naipe(1, 'paus'),
    new Naipe(2, 'ouros'),
    new Naipe(3, 'copas'),
    new Naipe(4, 'espadas'),
  ]


  constructor() { }

  ngOnInit(): void {
  }
  public selecionaNaipe(naipe: Naipe) {
    this.naipeSelecionado.emit(naipe);
  }

}
