import React from "react";
import { render } from "@testing-library/react";
import { ensureMocksReset, requestIdleCallback } from "@shopify/jest-dom-mocks";
import Favoritos from ".";
import { WithApp } from "../../Helpers/jest";

beforeAll(() => {
  requestIdleCallback.mock();
});
afterEach(() => {
  ensureMocksReset();
});

describe("Con 3 pokemones favoritos", () => {
  test("Renderizar 3 pokemones", () => {
    const renderResult = render(
      <WithApp storeData={{ favoritos: [1, 2, 3] }}>
        <Favoritos />
      </WithApp>
    );
    const data = renderResult.getAllByTestId("poke-tarjeta");
    expect(data.length).toBe(3);
  });
});

describe("Sin pokemones favoritos", () => {
  test("Renderizar ningún pokemon favorito", () => {
    const renderResult = render(
      <WithApp>
        <Favoritos />
      </WithApp>
    );
    const data = renderResult.queryAllByTestId("poke-tarjeta");
    renderResult.getByText("No haz marcado ningún pokémon como favorito.");
    expect(data.length).toBe(0);
  });
});
