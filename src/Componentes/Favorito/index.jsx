import React from 'react';
import styled from 'styled-components';
import { Estrella } from '../Svgs';

const Wrapper = styled.span`
  color: ${({ esFavorito }) => (esFavorito ? 'gold' : 'white')};
  transition: color 150ms ease-in-out, opacity 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export const Favorito = ({ onClick, esFavorito }) => (
  <Wrapper
    data-testid={`favorito-${esFavorito}`}
    esFavorito={esFavorito}
    onClick={onClick}
  >
    <Estrella />
  </Wrapper>
);
