import { css } from "styled-components";

const colores = {
  purpleBaseline: "#9378ff",
  purple100: "#C3ABFF",
  purple500: "#7660DE",
  purple200: "#9E83FF",
  white: "#ffffff",
  black200: "#1F1F1F",
};

// TODO: Implementar esto eventualmente algún día
const elementos = {
  boton: {
    backgroundColor: colores.purpleBaseline,
  },
};

export const Style32M = css`
  color: ${({ theme }) => theme.colores.black200};
  font-size: 32px;
  font-weight: bold;
`;

export const Style14 = css`
  color: ${({ theme }) => theme.colores.black200};
  font-size: 14px;
`;

const tipografias = {
  "32m": Style32M,
  "14": Style14,
};

export const Tema = {
  colores,
  tipografias,
  elementos,
};
