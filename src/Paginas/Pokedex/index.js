import React from "react";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import { getPokemonsByNames } from "@fforres/pokemon-local-database";
import styled from "styled-components";
import Input from "../../Componentes/Input";
const pokemons = getPokemonsByNames();

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

let pokemonesFiltrados = pokemons;
let ListaDePokeTarjetas = pokemonesFiltrados.map((pokemon) => {
  const { name: nombre, id, images, type: tipos } = pokemon;
  return [
    nombre,
    <PokeTarjeta
      nombre={nombre.english}
      key={id}
      id={id.toString().padStart((3, "0"))}
      imagen={images.thumbnail}
      tipos={tipos}
    />,
  ];
});

function Pokedex() {
  const [filter, setFilter] = React.useState("");
  const pokeTarjetasFiltradas = ListaDePokeTarjetas.filter(([nombre]) =>
    nombre.english.toLowerCase().includes(filter)
  );

  return (
    <React.Fragment>
      <Input
        name="Filter"
        onChange={(evento) => {
          setFilter(evento.target.value);
        }}
      />
      <CardsWrapper>
        {pokeTarjetasFiltradas.map((pokeTarjeta) => pokeTarjeta[1])}
      </CardsWrapper>
    </React.Fragment>
  );
}

export default Pokedex;
