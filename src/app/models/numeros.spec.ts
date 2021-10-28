import { Numeros } from './numeros';

let numeros: Numeros;

beforeEach(() => {
  numeros = new Numeros(
    1,
    'As',

  );
});

it('should create an instance', () => {
  expect(numeros).toBeTruthy();
});

});
