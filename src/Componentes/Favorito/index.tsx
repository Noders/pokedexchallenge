import React from "react";
import styled from "styled-components";
import { Estrella } from "../Svgs";

const Wrapper = styled.span<{ esFavorito: boolean }>`
  color: ${({ esFavorito }) => (esFavorito ? "gold" : "white")};
  transition: color 150ms ease-in-out, opacity 150ms ease-in-out;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;

type Props = {
  esFavorito: boolean;
  onClick: () => void;
};

export const Favorito = ({ onClick, esFavorito }: Props) => {
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
