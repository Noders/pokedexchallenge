import React from "react";
import Boton from "../Boton";
import { useHistory } from "react-router-dom";

import styled from "styled-components";

const Nav = styled.nav`
  display: inline-flex;
`;

export const Navigation = () => {
  const history = useHistory();
  return (
    <Nav>
      <Boton onClick={() => history.push("/pokedex")}>Ir a Pokedex</Boton>
      <Boton onClick={() => history.push("/favoritos")}>Ir a Favoritos</Boton>
    </Nav>
  );
};
