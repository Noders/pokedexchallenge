import React from "react";
import { useParams } from "react-router-dom";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { Loading } from "../../Componentes/Loading";

import { usePokemonFetch } from "./hooks";
import { AlternarFavoritoType, FavoritosType } from "../../Hooks/useFavoritos";

interface PropsInterna {
  nombre: string;
  id: string;
  imagen: string;
  tipos: string[];
  esFavorito: boolean;
  alternarFavorito: AlternarFavoritoType;
  loading: boolean;
  error: boolean;
}

export const PokemonPageInterna = ({
  nombre,
  id,
  imagen,
  tipos,
  esFavorito,
  alternarFavorito,
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
      imagen={imagen}
      tipos={tipos}
      esFavorito={esFavorito}
      alternarFavorito={alternarFavorito}
    />
  );
};

interface Props {
  alternarFavorito: AlternarFavoritoType;
  favoritos: FavoritosType;
}

const PokemonPage = ({ alternarFavorito, favoritos }: Props) => {
  const { nombrePokemon } = useParams();
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
      id={data.id.toString().padStart(3, "0")}
      imagen={data.imagen}
      tipos={data.tipos}
      esFavorito={favoritos.has(Number(data.id))}
      alternarFavorito={alternarFavorito}
      loading={loading}
      error={error}
    />
  );
};

export default PokemonPage;