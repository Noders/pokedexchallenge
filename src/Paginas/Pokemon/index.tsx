import React from "react";
import { useParams } from "react-router-dom";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { Loading } from "../../Componentes/Loading";
import { usePokemonFetch } from "./hooks";
import { useFavoritos } from "../../Hooks/useFavoritos";

export interface PropsInterna {
  nombre: string;
  id: number;
  tipos: string[];
  esFavorito: boolean;
  loading: boolean;
  error: boolean;
}

export const PokemonPageInterna = ({
  nombre,
  id,
  tipos,
  esFavorito,
  loading,
  error,
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
      nombre={nombre}
      id={id}
      tipos={tipos}
      esFavorito={esFavorito}
    />
  );
};

const PokemonPage = () => {
  const { nombrePokemon } = useParams();
  const { isFavorito } = useFavoritos();
  const { data, loading, error } = usePokemonFetch(nombrePokemon);
  if (loading || data === null) {
    // TODO: Agregar loading de verdad
    return <Loading />;
  }
  if (error) {
    // TODO: Agregar ERROR de verdad
    return <div>...ERROR!!!</div>;
  }
  return (
    <PokemonPageInterna
      nombre={data.nombre}
      id={Number(data.id)}
      tipos={data.tipos}
      esFavorito={isFavorito(Number(data.id))}
      loading={loading}
      error={error}
    />
  );
};

export default PokemonPage;
