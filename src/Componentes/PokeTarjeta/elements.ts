import styled from "styled-components";
import { Link } from "react-router-dom";

export const PoketarjetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: 20px;
  width: 236px;
  height: 230px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const PokeCuerpo = styled.div`
  margin: 0 auto;
`;

export const PokeImagen = styled.img`
  width: 100px;
`;

export const PokeCabecera = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const ContenedorDeTipos = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledLink = styled(Link)`
  ${({ theme }) => theme.tipografias["32m"]}
  text-decoration: none;
`;
