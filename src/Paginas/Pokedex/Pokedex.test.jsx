import React from "react";
import PropTypes from "prop-types";
import { render, act } from "@testing-library/react";
import { ensureMocksReset, requestIdleCallback } from "@shopify/jest-dom-mocks";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { Tema } from "../../Estilos";
import Pokedex from ".";

export const WithApp = ({ children }) => (
  <MemoryRouter>
    <ThemeProvider theme={Tema}>{children}</ThemeProvider>
  </MemoryRouter>
);
WithApp.propTypes = {
  children: PropTypes.node.isRequired,
};

beforeAll(() => {
  requestIdleCallback.mock();
});
afterEach(() => {
  ensureMocksReset();
});

test("Renderiza pokemones en Loading", async () => {
  const renderResult = render(
    <WithApp>
      <Pokedex alternarFavorito={() => {}} favoritos={new Set()} />
    </WithApp>
  );
  const data = await renderResult.findAllByText("Loading");
  expect(data.length).toBe(151);
});

test("Renderiza pokemones", async () => {
  const { findAllByTestId } = render(
    <WithApp>
      <Pokedex alternarFavorito={() => {}} favoritos={new Set()} />
    </WithApp>
  );
  act(() => requestIdleCallback.runIdleCallbacks());
  const data = await findAllByTestId("poke-cabecera");
  expect(data.length).toBe(151);
});

test("Renderiza 3 pokemones favoritos", async () => {
  const { findAllByTestId } = render(
    <WithApp>
      <Pokedex alternarFavorito={() => {}} favoritos={new Set([1, 2, 3])} />
    </WithApp>
  );
  act(() => requestIdleCallback.runIdleCallbacks());
  const data = await findAllByTestId("favorito-true");
  expect(data.length).toBe(3);
});
