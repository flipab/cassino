import { Component } from '@angular/core';
import { Naipe } from './models/naipe';
import { Numero } from './models/numeros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public numero?:Numero;
  public naipe?:Naipe;
  public alteraNaipe(naipe:Naipe)
  {
    this.naipe=naipe;
  }
  public alteraNumero(numero:Numero)
  {
    this.numero=numero;
  }
}
