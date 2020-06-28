import React from 'react';
import { render, act } from '@testing-library/react';
import { ensureMocksReset, requestIdleCallback } from '@shopify/jest-dom-mocks';

import Pokedex from '.';

beforeAll(() => {
  requestIdleCallback.mock();
});
afterEach(() => {
  ensureMocksReset();
});

test('Renderiza pokemones en Loading', async () => {
  const renderResult = render(<Pokedex favoritos={new Set()} />);
  const data = await renderResult.findAllByText('Loading');
  expect(data.length).toBe(151);
});

test('Renderiza pokemones', async () => {
  const { findAllByTestId } = render(<Pokedex favoritos={new Set()} />);
  act(() => requestIdleCallback.runIdleCallbacks());
  const data = await findAllByTestId('poke-cabecera');
  expect(data.length).toBe(151);
});

test('Renderiza 3 pokemones favoritos', async () => {
  const { findAllByTestId } = render(
    <Pokedex favoritos={new Set([1, 2, 3])} />,
  );
  act(() => requestIdleCallback.runIdleCallbacks());
  const data = await findAllByTestId('favorito-true');
  expect(data.length).toBe(3);
});
