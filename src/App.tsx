import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/client";

import { Router } from "./Componentes/Router";
import { Navigation } from "./Componentes/Navigation";
import { store } from "./Data/store";
import {
  GlobalFontStyles,
  GlobalReset,
  GlobalAppStyles,
  Tema,
} from "./Estilos";
import { apolloClient } from "./Servicios/apollo";

const App = () => {
  return (
    <ThemeProvider theme={Tema}>
      <Provider store={store}>
        <ApolloProvider client={apolloClient}>
          <GlobalAppStyles />
          <GlobalReset />
          <GlobalFontStyles />
          <BrowserRouter>
            <Navigation />
            <Router />
          </BrowserRouter>
        </ApolloProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
