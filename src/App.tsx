import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { Router } from "./Componentes/Router";
import { Navigation } from "./Componentes/Navigation";
import {
  GlobalFontStyles,
  GlobalReset,
  GlobalAppStyles,
  Tema,
} from "./Estilos";
import { store } from "./Data/store";

const App = () => {
  return (
    <ThemeProvider theme={Tema}>
      <Provider store={store}>
        <GlobalAppStyles />
        <GlobalReset />
        <GlobalFontStyles />
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
