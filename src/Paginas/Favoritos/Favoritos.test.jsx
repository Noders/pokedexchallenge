import React from 'react';
import { render } from '@testing-library/react';
import { ensureMocksReset, requestIdleCallback } from '@shopify/jest-dom-mocks';
import Favoritos from '.';

beforeAll(() => {
  requestIdleCallback.mock();
});
afterEach(() => {
  ensureMocksReset();
});

const alternarFavoritos = () => {};

describe('Con 3 pokemones favoritos', () => {
  const favoritos = new Set([1, 2, 3]);
  test('Renderizar 3 pokemones', () => {
    const renderResult = render(<Favoritos favoritos={favoritos} alternarFavoritos={alternarFavoritos} />);
    const data = renderResult.getAllByTestId('poke-tarjeta');
    expect(data.length).toBe(3);
  });
});

describe('Sin pokemones favoritos', () => {
  const favoritos = new Set([]);
  test('Renderizar ningún pokemon favorito', () => {
    const renderResult = render(<Favoritos favoritos={favoritos} alternarFavoritos={alternarFavoritos} />);
    const data = renderResult.queryAllByTestId('poke-tarjeta');
    renderResult.getByText('No haz marcado ningún pokémon como favorito.');
    expect(data.length).toBe(0);
  });
});
