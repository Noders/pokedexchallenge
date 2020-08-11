/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemonById
// ====================================================

export interface getPokemonById_pokemonById {
  __typename: "Pokemon";
  nombre: string | null;
  tipos: string[];
  id: string | null;
  imagen: string | null;
  numero: number | null;
}

export interface getPokemonById {
  pokemonById: getPokemonById_pokemonById | null;
}

export interface getPokemonByIdVariables {
  pokemonId?: number | null;
}
