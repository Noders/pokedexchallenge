import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Boton from '../Boton';

const Nav = styled.nav`
  display: inline-flex;
`;

export const Navigation = () => {
  const history = useHistory();
  return (
    <Nav>
      <Boton onClick={() => history.push('/pokedex')}>Ir a Pokedex</Boton>
      <Boton onClick={() => history.push('/favoritos')}>Ir a Favoritos</Boton>
    </Nav>
  );
};
