import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const tipos = {
  fuego: "fuego",
  volador: "volador",
  electrico: "electrico",
  luchador: "luchador",
  veneno: "veneno",
  normal: "normal",
  tierra: "tierra",
  roca: "roca",
  insecto: "insecto",
  fantasma: "fantasma",
  agua: "agua",
  planta: "planta",
  metal: "metal",
  hielo: "hielo",
  psiquico: "psiquico",
  dragon: "dragon",
  oscuridad: "oscuridad",
  hada: "hada",
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
const luchador = css`
  background: #c03028;
  border: 1px solid #7d1f1a;
`;
const veneno = css`
  background: #a040a0;
  border: 1px solid #682a68;
`;
const normal = css`
  background: #a8a878;
  border: 1px solid #6d6d4e;
`;
const tierra = css`
  background: #e0c068;
  border: 1px solid #927d44;
`;
const roca = css`
  background: #b8a038;
  border: 1px solid #786824;
`;
const insecto = css`
  background: #a8b820;
  border: 1px solid #6d7815;
`;
const fantasma = css`
  background: #705898;
  border: 1px solid #493963;
`;
const agua = css`
  background: #6890f0;
  border: 1px solid #445e9c;
`;
const planta = css`
  background: #78c850;
  border: 1px solid #4e8234;
`;
const metal = css`
  background: #b8b8d0;
  border: 1px solid #787887;
`;
const hielo = css`
  background: #98d8d8;
  border: 1px solid #638d8d;
`;
const psiquico = css`
  background: #f85888;
  border: 1px solid #a13959;
`;
const dragon = css`
  background: #7038f8;
  border: 1px solid #4924a1;
`;
const oscuridad = css`
  background: #705848;
  border: 1px solid #49392f;
`;
const hada = css`
  background: #ee99ac;
  border: 1px solid #9b6470;
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
    switch (tipo) {
      case tipos.fuego:
        return fuego;
      case tipos.volador:
        return volador;
      case tipos.electrico:
        return electrico;
      case tipos.luchador:
        return luchador;
      case tipos.veneno:
        return veneno;
      case tipos.insecto:
        return insecto;
      case tipos.planta:
        return planta;
      case tipos.oscuridad:
        return oscuridad;
      case tipos.hielo:
        return hielo;
      case tipos.psiquico:
        return psiquico;
      case tipos.dragon:
        return dragon;
      case tipos.fantasma:
        return fantasma;
      case tipos.metal:
        return metal;
      case tipos.agua:
        return agua;
      case tipos.roca:
        return roca;
      case tipos.tierra:
        return tierra;
      case tipos.hada:
        return hada;
      default:
        return normal;
    }
  }}
`;

function Tipo(props) {
  return <StyledDiv tipo={props.tipo}>{tipos[props.tipo]}</StyledDiv>;
}

Tipo.propTypes = {
  tipo: PropTypes.oneOf(Object.keys(tipos)).isRequired,
};

export default Tipo;
