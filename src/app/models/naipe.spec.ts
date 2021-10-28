import { Naipe } from './naipe';

describe('Naipe', () => {

  let naipe: Naipe;

  beforeEach(() => {
    naipe = new Naipe(
      'Copas',
    );
  });

  it('should create an instance', () => {
    expect(naipe).toBeTruthy();
  });

});
