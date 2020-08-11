import { gql } from "@apollo/client";

export const getPokemonById = gql`
  query getPokemonById($pokemonId: Int) {
    pokemonById(id: $pokemonId) {
      nombre
      tipos
      id
      imagen
      numero
    }
  }
`;
