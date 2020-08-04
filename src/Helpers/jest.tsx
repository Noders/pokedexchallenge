import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";
import { rootReducer } from "../Data/reducers";
import { Tema } from "../Estilos";

export const WithApp: React.FC<{ storeData?: { [key: string]: unknown } }> = ({
  children,
  storeData = {},
}) => {
  const store = createStore(rootReducer, storeData);
  return (
    <MemoryRouter>
      <Provider store={store}>
        <ThemeProvider theme={Tema}>{children}</ThemeProvider>
      </Provider>
    </MemoryRouter>
  );
};
