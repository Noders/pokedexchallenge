import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Tipo, { tipos } from '../Tipo';
import { Title, Body14 } from '../Tipografia';
import { Favorito } from '../Favorito';

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
  align-items: baseline;
`;

const ContenedorDeTipos = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const isServerSideRendering = typeof window === 'undefined';
const useDeferedRendering = () => {
  const [render, setRender] = React.useState(isServerSideRendering);
  React.useEffect(() => {
    if (isServerSideRendering) {
      return;
    }
    const handle = window.requestIdleCallback(() => {
      setRender(true);
    });
    // We need to return different cleanup functions depending on the branch taken here
    return () => window.cancelIdleCallback(handle);
  }, []);
  return render;
};

export function PokeTarjeta({
  nombre,
  id,
  imagen,
  tipos,
  alternarFavorito,
  esFavorito,
}) {
  const render = useDeferedRendering(true);

  return (
    <PoketarjetaWrapper data-testid="poke-tarjeta">
      {render ? (
        <>
          <PokeCabecera data-testid="poke-cabecera">
            <span>
              <Title>{nombre}</Title>
              <Favorito onClick={alternarFavorito} esFavorito={esFavorito} />
            </span>
            <Body14>
              #
              {id}
            </Body14>
          </PokeCabecera>
          <PokeCuerpo>
            <PokeImagen src={imagen} />
          </PokeCuerpo>
          <ContenedorDeTipos>
            {tipos.map((tipo) => (
              <Tipo
                key={tipo}
                tipo={mapaDeTipos[tipo]}
                tipo-original={tipo}
              />
            ))}
          </ContenedorDeTipos>
        </>
      ) : (
        <div>Loading</div>
      )}
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
