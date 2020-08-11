import { gql } from "@apollo/client";

export const pokemonesQuery = gql`
  query getAllPokemones {
    pokemones {
      nombre
      tipos
      id
      imagen
      numero
    }
  }
`;
