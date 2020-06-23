import React from "react";
import styled, { css } from "styled-components";

const primario = css`
  color: #ffffff;
  background-color: #9378ff;
  border-color: #9378ff;
  &:hover {
    background-color: #9e83ff;
    border-color: #9e83ff;
  }
  &:active {
    background-color: #7660de;
    border-color: #7660de;
  }
`;

const secundario = css`
  color: #9378ff;
  background-color: #ffffff;
  border-color: #9378ff;
`;

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
    if (props.tipo === "secundario") {
      return secundario;
    }
    return primario;
  }}
`;

function Boton({ onClick, tipo, children }) {
  return (
    <Button onClick={onClick} tipo={tipo}>
      {children}
    </Button>
  );
}

export default Boton;
