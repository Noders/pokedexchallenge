import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { getPokemonById } from "@fforres/pokemon-local-database";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

function Favoritos({ favoritos, alternarFavorito }) {
  return (
    <CardsWrapper>
      {favoritos.size === 0
        ? "No haz marcado ningún pokémon como favorito."
        : Array.from(favoritos)
            .filter((idFavorito) => getPokemonById(idFavorito))
            .map((idFavorito) => {
              const { id, name, type } = getPokemonById(idFavorito);
              const parsedId = id.toString().padStart(3, "0");
              const url = `https://raw.githubusercontent.com/fforres/pokemon-local-database/master/src/data/thumbnails/${parsedId}.png`;
              return (
                <PokeTarjeta
                  nombre={name.english}
                  key={idFavorito}
                  id={parsedId}
                  imagen={url}
                  tipos={type}
                  esFavorito={favoritos.has(idFavorito)}
                  alternarFavorito={() => alternarFavorito(idFavorito)}
                />
              );
            })}
    </CardsWrapper>
  );
}

Favoritos.propTypes = {
  favoritos: PropTypes.instanceOf(Set).isRequired,
  alternarFavorito: PropTypes.func.isRequired,
};

export default Favoritos;
