import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { Loading } from "../../Componentes/Loading";
import { useFavoritos } from "../../Hooks/useFavoritos";
import { getPokemonById } from "./queries";
import {
  getPokemonById as PokemonById,
  getPokemonByIdVariables,
} from "./__generated__/getPokemonById";

export interface PropsInterna {
  nombre: string;
  id: number;
  tipos: string[];
  esFavorito: boolean;
  loading: boolean;
  error: boolean;
  imagen: string;
  numero: number;
}

export const PokemonPageInterna = ({
  nombre,
  id,
  tipos,
  esFavorito,
  loading,
  error,
  imagen,
  numero,
}: PropsInterna) => {
  if (loading) {
    // TODO: Agregar loading de verdad
    return <Loading />;
  }
  if (error) {
    // TODO: Agregar ERROR de verdad
    return <div>...ERROR!!!</div>;
  }
  return (
    <PokeTarjeta
      imagen={imagen}
      nombre={nombre}
      id={id}
      tipos={tipos}
      numero={numero}
      esFavorito={esFavorito}
    />
  );
};

const PokemonPage = () => {
  const { idPokemon } = useParams();
  const { isFavorito } = useFavoritos();

  const { loading, data, error } = useQuery<
    PokemonById,
    getPokemonByIdVariables
  >(getPokemonById, {
    variables: { pokemonId: Number(idPokemon) },
  });
  const pokemon = data?.pokemonById;
  return (
    <PokemonPageInterna
      nombre={pokemon?.nombre}
      id={Number(pokemon?.id)}
      tipos={pokemon?.tipos}
      numero={pokemon?.numero}
      esFavorito={isFavorito(pokemon?.numero)}
      loading={loading || !pokemon}
      error={Boolean(error)}
      imagen={pokemon?.imagen}
    />
  );
};

export default PokemonPage;
