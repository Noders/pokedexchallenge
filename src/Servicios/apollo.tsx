import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://pokeapi.noders.live/api/graphql",
  cache: new InMemoryCache(),
});
