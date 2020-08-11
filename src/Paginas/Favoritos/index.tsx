import React from "react";
// import { getPokemonById } from "@fforres/pokemon-local-database";
import { gql, useQuery } from "@apollo/client";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { CardsWrapper } from "./elements";
import { useFavoritos } from "../../Hooks";
import { Loading, tamanosLoader } from "../../Componentes/Loading";

const pokemonesQuery = gql`
  query getPokemones {
    pokemones {
      nombre
      tipos
      id
      numero
      imagen
    }
  }
`;

function Favoritos() {
  const { isFavorito, favoritos } = useFavoritos();
  const { loading, data, error } = useQuery(pokemonesQuery);
  if (loading) {
    return <Loading tamano={tamanosLoader.grande} />;
  }
  const favoritosSet = new Set(favoritos);
  const pokemones = data?.pokemones;
  return (
    <CardsWrapper>
      {favoritos.length === 0
        ? "No haz marcado ningún pokémon como favorito."
        : pokemones
            .filter((pokemon) => favoritosSet.has(pokemon.numero))
            .map((pokemon) => {
              const { nombre, id, numero, tipos, imagen } = pokemon;
              return (
                <PokeTarjeta
                  nombre={nombre}
                  key={id}
                  id={id}
                  tipos={tipos}
                  imagen={imagen}
                  numero={numero}
                  esFavorito={isFavorito(numero)}
                />
              );
            })}
    </CardsWrapper>
  );
}

export default Favoritos;
