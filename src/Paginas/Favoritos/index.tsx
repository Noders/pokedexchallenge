import React from "react";
import { getPokemonById } from "@fforres/pokemon-local-database";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { CardsWrapper } from "./elements";
import { useFavoritos } from "../../Hooks";

function Favoritos() {
  const { isFavorito, favoritos } = useFavoritos();
  return (
    <CardsWrapper>
      {favoritos.length === 0
        ? "No haz marcado ningún pokémon como favorito."
        : Array.from(favoritos)
            .filter((idFavorito) => getPokemonById(idFavorito))
            .map((idFavorito) => {
              const pokemon = getPokemonById(idFavorito);
              if (!pokemon) {
                return null;
              }
              const { id, name, type } = pokemon;
              return (
                <PokeTarjeta
                  nombre={name.english}
                  key={idFavorito}
                  id={id}
                  tipos={type}
                  esFavorito={isFavorito(idFavorito)}
                />
              );
            })}
    </CardsWrapper>
  );
}

export default Favoritos;
