import React from "react";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const usePokemonFetch = (nombrePokemon) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pokemonData, setPokemonData] = React.useState(null);
  React.useEffect(() => {
    const fetching = async () => {
      try {
        const rawRespone = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`
        );
        const apiResponse = await rawRespone.json();
        setPokemonData({
          tipos: apiResponse.types.map(({ type }) => capitalize(type.name)),
          nombre: apiResponse.name,
          id: apiResponse.id,
          imagen: apiResponse.sprites.front_default,
        });
        setError(false);
      } catch (e) {
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
