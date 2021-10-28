import { Component, Input, OnInit } from '@angular/core';
import { Naipe } from 'src/app/models/naipe';
import { Numero } from 'src/app/models/numeros';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {
  @Input()
  public numero?:Numero;
  @Input()
  public naipe?:Naipe;

  constructor() { }

  ngOnInit(): void {
  }

}
