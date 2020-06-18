import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const tipos = {
  fuego: "fuego",
  volador: "volador",
  electrico: "electrico",
};

const mapaDeTipos = {
  [tipos.fuego]: {
    texto: "Fuego🔥",
    clase: "tipo-fuego",
  },
  [tipos.volador]: {
    texto: "Volador💨",
    clase: "tipo-volador",
  },
  [tipos.electrico]: {
    texto: "Electrico⚡",
    clase: "tipo-electrico",
  },
};

const fuego = css`
  background: #ff3021;
  border: 1px solid #cc261a;
`;

const volador = css`
  background: #8d9dfa;
  border: 1px solid #7985ce;
`;
const electrico = css`
  background: #ffc530;
  border: 1px solid #cc9e26;
`;

const StyledDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  padding: 0px 8px;
  height: 23px;
  border-radius: 5px;
  align-items: center;
  color: white;
  ${({ tipo }) => {
    if (tipo === tipos.fuego) {
      return fuego;
    }
    if (tipo === tipos.volador) {
      return volador;
    }
    if (tipo === tipos.electrico) {
      return electrico;
    }
  }}
`;

function Tipo(props) {
  const tipo = mapaDeTipos[props.tipo];
  if (!tipo) {
    return null;
  }
  return <StyledDiv tipo={props.tipo}>{tipo.texto}</StyledDiv>;
}

Tipo.propTypes = {
  tipo: PropTypes.oneOf(Object.keys(tipos)).isRequired,
};

export default Tipo;
