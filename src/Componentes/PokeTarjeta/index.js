import React from "react";
import Tipo, { tipos } from "../../Componentes/Tipo";
import { Title, Body14 } from "../../Componentes/Tipografia";
import styled from "styled-components";
import propTypes from "prop-types";

const mapaDeTipos = {
  Fire: tipos.fuego,
  Flying: tipos.volador,
  Electric: tipos.electrico,
  Grass: tipos.planta,
  Poison: tipos.veneno,
  Normal: tipos.normal,
  Ground: tipos.tierra,
  Rock: tipos.roca,
  Bug: tipos.insecto,
  Ghost: tipos.fantasma,
  Steel: tipos.metal,
  Water: tipos.agua,
  Psychic: tipos.psiquico,
  Ice: tipos.hielo,
  Dragon: tipos.dragon,
  Dark: tipos.veneno,
  Fairy: tipos.hada,
  Fighting: tipos.luchador,
};

const PoketarjetaWrapper = styled.div`
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

const PokeCuerpo = styled.div`
  margin: 0 auto;
`;

const PokeImagen = styled.img`
  width: 100px;
`;

const PokeCabecera = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContenedorDeTipos = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export function PokeTarjeta({ nombre, id, imagen, tipos }) {
  return (
    <PoketarjetaWrapper>
      <PokeCabecera>
        <Title>{nombre}</Title> <Body14>#{id}</Body14>
      </PokeCabecera>
      <PokeCuerpo>
        <PokeImagen src={`data:image/png;base64, ${imagen}`} />
      </PokeCuerpo>
      <ContenedorDeTipos>
        {tipos.map((tipo) => {
          return (
            <Tipo key={tipo} tipo={mapaDeTipos[tipo]} tipo-original={tipo} />
          );
        })}
      </ContenedorDeTipos>
    </PoketarjetaWrapper>
  );
}
PokeTarjeta.propTypes = {
  nombre: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  imagen: propTypes.string.isRequired,
  tipos: propTypes.arrayOf(propTypes.string).isRequired,
};

export default React.memo(PokeTarjeta);
