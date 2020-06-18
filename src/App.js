import React from "react";
import Pokedex from "./Paginas/Pokedex";
import Login from "./Paginas/Login";
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from "./Estilos";

export const Paginas = {
  pokedex: Pokedex,
  login: Login,
};

function App() {
  const [paginaActual, setPaginaActual] = React.useState("login");
  const ComponenteQueNoSeCualEs = Paginas[paginaActual];
  return (
    <React.Fragment>
      <GlobalAppStyles />
      <GlobalReset />
      <GlobalFontStyles />
      <ComponenteQueNoSeCualEs onPageChange={setPaginaActual} />
    </React.Fragment>
  );
}

export default App;
