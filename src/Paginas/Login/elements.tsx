import styled from "styled-components";

export const Pagina = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelWrapper = styled.main`
  width: 500px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const TituloFancy = styled.h1`
  font-size: 46px;
  line-height: 72px;
  font-family: "Rock Salt";
  position: absolute;
  margin: 0;
  top: -100px;
  left: 50%;
  transform: rotate(-9deg) translateX(-50%);
  background: -webkit-linear-gradient(40deg, #7660de, #93e16f);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
`;
