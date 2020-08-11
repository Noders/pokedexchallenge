import React from "react";
import { useQuery } from "@apollo/client";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { CardsWrapper } from "./elements";
import { useFavoritos } from "../../Hooks";
import { Loading, tamanosLoader } from "../../Componentes/Loading";
import { pokemonesQuery } from "./queries";
import { getPokemones } from "./__generated__/getPokemones";

function Favoritos() {
  const { isFavorito, favoritos } = useFavoritos();
  const { loading, data, error } = useQuery<getPokemones>(pokemonesQuery);
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
