import { gql } from "@apollo/client";

export default gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
    }
  }
`;
