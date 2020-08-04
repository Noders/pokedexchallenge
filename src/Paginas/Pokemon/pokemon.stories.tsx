import React from "react";
import { PokemonPageInterna, PropsInterna } from "./index";

const pokemonPageProps: PropsInterna = {
  nombre: "Missingno",
  id: 123,
  tipos: ["Normal"],
  esFavorito: false,
  loading: false,
  error: false,
};

export default {
  title: "PokemonPage",
  component: PokemonPageInterna,
};

// could not find react - redux context value; please ensure the component is wrapped in a < Provider >

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
