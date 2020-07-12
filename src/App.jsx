import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Componentes/Router";
import { Navigation } from "./Componentes/Navigation";
import {
  GlobalFontStyles,
  GlobalReset,
  GlobalAppStyles,
  Tema,
} from "./Estilos";

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <GlobalAppStyles />
      <GlobalReset />
      <GlobalFontStyles />
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
