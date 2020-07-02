import React from "react";
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
