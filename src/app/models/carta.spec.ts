import { Carta } from './carta';
import { Numeros } from './numeros';

describe('Carta', () => {

  let carta: Carta;
  beforeEach(() => {
    carta = new Carta(
      new Carta(
        'Copas',
        1,
        new Numeros(
          1,
          'Copas',
        ),
        new Naipe(
          1,
          'Copas',
        );
    });

  it('should create an instance', () => {
    expect(Carta()).toBeTruthy();
  });
});
