import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Estrella } from "../Svgs";

const Wrapper = styled.span<{ esFavorito: boolean }>`
  color: ${({ esFavorito }) => (esFavorito ? "gold" : "white")};
  transition: color 150ms ease-in-out, opacity 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

export const Favorito = ({ onClick, esFavorito }) => {
  return (
    <Wrapper
      data-testid={`favorito-${esFavorito}`}
      esFavorito={esFavorito}
      onClick={onClick}
    >
      <Estrella />
    </Wrapper>
  );
};

Favorito.propTypes = {
  esFavorito: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
