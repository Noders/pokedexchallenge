import React from "react";
import { MemoryRouter, Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {
  Tema,
  GlobalAppStyles,
  GlobalReset,
  GlobalFontStyles
} from "../src/Estilos";

export const themeDecorator = (storyFn) => (
  <ThemeProvider theme={Tema}>{storyFn()}</ThemeProvider>
);

export const globalDecorators = (storyFn) => (
  <React.Fragment>
    <GlobalAppStyles />
    <GlobalReset />
    <GlobalFontStyles />
    {storyFn()}
  </React.Fragment>
);

export const routerDecorator = (storyFn) => (
  <MemoryRouter>
    {storyFn()}
  </MemoryRouter>
);

export const mockedRouterDecorator = (history) => {
  const routerDecorator = (storyFn) => (
    <Router history={history}>
      <Route path="/pokedex/:nombrePokemon">
        {storyFn()}
      </Route>
    </Router>
  );
  return routerDecorator
}
