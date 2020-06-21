import React from "react";
import Pokedex from "./Paginas/Pokedex";
import Login from "./Paginas/Login";
import Favoritos from "./Paginas/Favoritos";
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from "./Estilos";
import Boton from "./Componentes/Boton";
import styled from "styled-components";

const Nav = styled.nav`
  display: inline-flex;
`;

export const Paginas = {
  pokedex: Pokedex,
  login: Login,
  favoritos: Favoritos,
};

function App() {
  const [paginaActual, setPaginaActual] = React.useState("pokedex");
  const [favoritos, setFavoritos] = React.useState(new Set());
  const ComponenteQueNoSeCualEs = Paginas[paginaActual];
  return (
    <React.Fragment>
      <GlobalAppStyles />
      <GlobalReset />
      <GlobalFontStyles />
      <Nav>
        <Boton onClick={() => setPaginaActual("pokedex")}>Ir a Pokedex</Boton>
        <Boton onClick={() => setPaginaActual("favoritos")}>
          Ir a Favoritos
        </Boton>
      </Nav>
      <ComponenteQueNoSeCualEs
        onPageChange={setPaginaActual}
        favoritos={favoritos}
        alternarFavorito={(idFavorito) => {
          setFavoritos((favoritos) => {
            const newFavoritos = new Set(favoritos);
            if (favoritos.has(idFavorito)) {
              newFavoritos.delete(idFavorito);
            } else {
              newFavoritos.add(idFavorito);
            }
            return newFavoritos;
          });
        }}
      />
    </React.Fragment>
  );
}

export default App;
