import { gql } from "@apollo/client";

export const pokemonesQuery = gql`
  query getPokemones {
    pokemones {
      nombre
      tipos
      id
      numero
      imagen
    }
  }
`;
