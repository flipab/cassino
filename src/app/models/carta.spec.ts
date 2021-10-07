import { Carta } from './carta';

describe('Carta', () => {

  let carta: Carta;
  beforeEach(() => {
    carta = new Carta(
      new Carta(
        'Copas',
      ),
      1,
      );
    });

  it('should create an instance', () => {
    expect(Carta()).toBeTruthy();
  });
});
