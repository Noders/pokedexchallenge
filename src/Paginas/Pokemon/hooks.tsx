import React from "react";

function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

type PokemonDataType = {
  tipos: string[];
  nombre: string;
  id: string;
  imagen: string;
};
export const usePokemonFetch = (nombrePokemon: string) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pokemonData, setPokemonData] = React.useState<null | PokemonDataType>(
    null
  );
  React.useEffect(() => {
    const fetching = async () => {
      try {
        const rawRespone = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`
        );
        const apiResponse = (await rawRespone.json()) as {
          name: string;
          types: {
            type: {
              name: string;
            };
          }[];
          id: string;
          sprites: {
            // eslint-disable-next-line camelcase
            front_default: string;
          };
        };

        setPokemonData({
          tipos: apiResponse.types.map(({ type }) => capitalize(type.name)),
          nombre: apiResponse.name,
          id: apiResponse.id,
          // eslint-disable-next-line camelcase
          imagen: apiResponse.sprites.front_default,
        });
        setError(false);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetching();
  }, [nombrePokemon]);

  return { loading, error, data: pokemonData };
};
