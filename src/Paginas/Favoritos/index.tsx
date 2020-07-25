import React from "react";
import { getPokemonById } from "@fforres/pokemon-local-database";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { CardsWrapper } from "./elements";
import { AlternarFavoritoType, FavoritosType } from "../../Hooks/useFavoritos";

interface Props {
  alternarFavorito: AlternarFavoritoType;
  favoritos: FavoritosType;
}

function Favoritos({ favoritos, alternarFavorito }: Props) {
  return (
    <CardsWrapper>
      {favoritos.size === 0
        ? "No haz marcado ningún pokémon como favorito."
        : Array.from(favoritos)
            .filter((idFavorito) => getPokemonById(idFavorito))
            .map((idFavorito) => {
              const pokemon = getPokemonById(idFavorito);
              if (!pokemon) {
                return null;
              }
              const { id, name, type } = pokemon;
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

export default Favoritos;
