import React from 'react';
import styled from 'styled-components';

import { getPokemonById } from '@fforres/pokemon-local-database';
import { PokeTarjeta } from '../../Componentes/PokeTarjeta';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Favoritos({ favoritos, alternarFavorito }) {
  return (
    <CardsWrapper>
      {Array.from(favoritos).map((idFavorito) => {
        const pokemon = getPokemonById(idFavorito);
        const parsedId = pokemon.id.toString().padStart(3, '0');
        const url = `https://raw.githubusercontent.com/fforres/pokemon-local-database/master/src/data/thumbnails/${parsedId}.png`;
        return (
          <PokeTarjeta
            nombre={pokemon.name.english}
            key={idFavorito}
            id={parsedId}
            imagen={url}
            tipos={pokemon.type}
            esFavorito={favoritos.has(idFavorito)}
            alternarFavorito={() => alternarFavorito(idFavorito)}
          />
        );
      })}
    </CardsWrapper>
  );
}

export default Favoritos;
