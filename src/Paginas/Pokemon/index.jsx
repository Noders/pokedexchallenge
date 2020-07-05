import React from "react";
import { useParams } from "react-router-dom";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonPage = () => {
  const { nombrePokemon } = useParams();
  const [pokemon, setPokemon] = React.useState();
  const hora = { asda: "123" };
  const loqvoyalogear = hora.asda;
  React.useEffect(() => {
    // Guardar esto en el estado del componente
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon.toLowerCase()}`)
      .then((data) => data.json())
      .then((apiResponse) => {
        setPokemon({
          tipos: apiResponse.types.map(({ type }) => capitalize(type.name)),
          nombre: apiResponse.name,
          id: apiResponse.id,
          imagen: apiResponse.sprites.front_default,
        });
      });
  }, [nombrePokemon, loqvoyalogear]);

  // hora = 123;
  hora.asda = 123;

  if (!pokemon) {
    // TODO: Agregar loading de verdad
    return <div>...loading</div>;
  }
  return (
    <PokeTarjeta
      nombre={pokemon.nombre}
      id={pokemon.id.toString().padStart(3, "0")}
      imagen={pokemon.imagen}
      tipos={pokemon.tipos}
      esFavorito={false}
      alternarFavorito={() => {}}
    />
  );
};

export default PokemonPage;
