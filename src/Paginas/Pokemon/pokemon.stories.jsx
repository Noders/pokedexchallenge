import React from "react";
import { PokemonPageInterna } from "./index";
import missingno from "../../Componentes/PokeTarjeta/missingno.jpg";

const pokemonPageProps = {
  nombre: "Missingno",
  id: "123",
  imagen: missingno,
  tipos: ["Normal"],
  alternarFavorito: () => {},
  esFavorito: false,
  loading: false,
  error: false,
};

export default {
  title: "PokemonPage",
  component: PokemonPageInterna,
};

export const Default = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PokemonPageInterna {...pokemonPageProps} />
);

export const Loading = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <PokemonPageInterna {...pokemonPageProps} loading />
);
// eslint-disable-next-line react/jsx-props-no-spreading
export const Error = () => <PokemonPageInterna {...pokemonPageProps} error />;
