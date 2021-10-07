import { Naipe } from "./naipe";
import { Numeros } from "./numeros";

export class Carta {

  constructor(
    public naipe: Naipe[],
    public numero: Numeros[],

  ) {
  }

}

