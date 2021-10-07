import { Numeros } from './numeros';

let numeros: Numeros;

beforeEach(() => {
  numeros = new Numeros(
    1,
  );
});

it('should create an instance', () => {
  expect(numeros).toBeTruthy();
});

});
