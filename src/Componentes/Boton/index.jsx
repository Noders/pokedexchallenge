import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const primario = css(({theme}) => {
    const {colores} = theme;
    return {
        color: colores.white,
        backgroundColor: colores.purpleBaseline,
        borderColor: colores.purpleBaseline,
        '&:hover': {
            backgroundColor: colores.purple200,
            borderColor: colores.purple200,
        },
        '&:active': {
            backgroundColor: colores.purple500,
            borderColor: colores.purple500,
        }
    };
});

const secundario = css(({theme}) => {
    const {colores} = theme;
    return {
        color: colores.purpleBaseline,
        backgroundColor: colores.white,
        borderColor: colores.purpleBaseline,
    };
});
  
const baseButtonStyle = css`
  display: flex;
  flex-direction: column;
  height: 40px;
  min-width: 144px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  outline: 0;
  transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out,
    box-shadow 150ms ease-in-out;
  &:focus {
    box-shadow: 0px 0px 8px rgba(135, 206, 250, 0.75);
  }
`;

const Button = styled.button`
  ${baseButtonStyle}
  ${(props) => {
    if (props.tipo === 'secundario') {
      return secundario;
    }
    return primario;
  }}
`;

export const Boton = ({ onClick, tipo, children }) => (
  <Button onClick={onClick} tipo={tipo}>
    {children}
  </Button>
);

Boton.propTypes = {
  tipo: PropTypes.oneOf(['primario', 'secundario']).isRequired,
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
};
