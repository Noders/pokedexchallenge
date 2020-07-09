import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import pikachu from "./tenor.gif";

const ContenedorPequeno = styled.div`
  width: 100px;
  height: 100px;
`;

const ContenedorMediano = styled.div`
  width: 200px;
  height: 200px;
`;

const ContenedorGrande = styled.div`
  width: 300px;
  height: 300px;
`;

const Imagen = styled.img`
  width: 100%;
`;

export const tamanosLoader = {
  pequeno: "pequeno",
  mediano: "mediano",
  grande: "grande",
};

const mapaLoders = {
  [tamanosLoader.pequeno]: ContenedorPequeno,
  [tamanosLoader.mediano]: ContenedorMediano,
  [tamanosLoader.grande]: ContenedorGrande,
};

export const Loading = ({ tamano = tamanosLoader.pequeno }) => {
  const Contenedor = mapaLoders[tamano];
  return (
    <Contenedor>
      <Imagen src={pikachu} alt="un lindo pikachu corriendo en los bosques" />
    </Contenedor>
  );
};

Loading.propTypes = {
  tamano: PropTypes.oneOf(Object.keys(tamanosLoader)),
};

Loading.defaultProps = {
  tamano: tamanosLoader.pequeno,
};
