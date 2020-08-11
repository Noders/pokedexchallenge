/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPokemones
// ====================================================

export interface getAllPokemones_pokemones {
  __typename: "Pokemon";
  nombre: string | null;
  tipos: string[];
  id: string | null;
  imagen: string | null;
  numero: number | null;
}

export interface getAllPokemones {
  pokemones: getAllPokemones_pokemones[];
}
