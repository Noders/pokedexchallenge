import React from "react";
import { ThemeProvider } from "styled-components";
import { Boton } from ".";
import { Tema } from "../../Estilos";

export default {
  title: "Boton",
  component: Boton,
};

export const ToStorybook = () => (
  <ThemeProvider theme={Tema}>
    <Boton>Hola :)</Boton>
  </ThemeProvider>
);

ToStorybook.story = {
  name: "Boton primario",
};

export const Secundario = () => (
  <ThemeProvider theme={Tema}>
    <Boton tipo="secundario">Mundo!</Boton>
  </ThemeProvider>
);

Secundario.story = {
  name: "Boton secundario",
};
