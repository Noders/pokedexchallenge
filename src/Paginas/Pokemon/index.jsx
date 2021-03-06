import React from "react";
import PropTypes from "prop-types";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { Loading } from "../../Componentes/Loading";
import { pokemonPageProps } from "./types";
import { usePokemonFetch } from "./hooks";

export const PokemonPageInterna = ({
  nombre,
  id,
  imagen,
  tipos,
  esFavorito,
  alternarFavorito,
  loading,
  error,
}) => {
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
      imagen={imagen}
      tipos={tipos}
      esFavorito={esFavorito}
      alternarFavorito={alternarFavorito}
    />
  );
};

PokemonPageInterna.propTypes = pokemonPageProps;

const PokemonPage = ({ params }) => {
  const { data, loading, error } = usePokemonFetch(params.nombrePokemon);
  if (loading) {
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
      id={data.id.toString().padStart(3, "0")}
      imagen={data.imagen}
      tipos={data.tipos}
      esFavorito={false}
      alternarFavorito={() => {}}
      loading={loading}
      error={error}
    />
  );
};

PokemonPage.propTypes = {
  params: PropTypes.shape({
    nombrePokemon: PropTypes.string.isRequired,
  }).isRequired,
};

export default PokemonPage;
