/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getPokemones
// ====================================================

export interface getPokemones_pokemones {
  __typename: "Pokemon";
  nombre: string | null;
  tipos: string[];
  id: string | null;
  numero: number | null;
  imagen: string | null;
}

export interface getPokemones {
  pokemones: getPokemones_pokemones[];
}
