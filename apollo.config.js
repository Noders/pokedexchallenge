module.exports = {
  client: {
    service: {
      name: "PokemonGraphqlApi",
      localSchemaFile: "./schema.json",
    },
    addTypename: false,
    includes: [
      "src/**/fragments.ts",
      "src/**/queries.ts",
      "src/**/mutations.ts",
    ],
    tagName: "gql",
  },
};
