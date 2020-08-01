import React from "react";
import { getPokemonsByNames } from "@fforres/pokemon-local-database";
import styled from "styled-components";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import Input from "../../Componentes/Input";
import { useFavoritos } from "../../Hooks";

const pokemons = getPokemonsByNames();

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const InputWrapper = styled.div`
  width: 320px;
  margin: 24px auto;
  max-width: 100%;
`;

const pokemonesFiltrados = pokemons.slice(0, 151);

function Pokedex() {
  const [filter, setFilter] = React.useState("");
  const { isFavorito } = useFavoritos();
  const pokeTarjetasFiltradas = React.useMemo(
    () =>
      pokemonesFiltrados
        .filter(({ name }) => name.english.toLowerCase().includes(filter))
        .map((pokemon) => {
          const { name: nombre, id, type: tipos } = pokemon;
          return (
            <PokeTarjeta
              nombre={nombre.english}
              key={id}
              id={id}
              tipos={tipos}
              esFavorito={isFavorito(id)}
            />
          );
        }),
    [filter, isFavorito]
  );

  return (
    <React.Fragment>
      <InputWrapper>
        <Input
          name="Filter"
          onChange={(evento) => {
            setFilter(evento.target.value);
          }}
          label="filter"
        />
      </InputWrapper>
      <CardsWrapper>{pokeTarjetasFiltradas}</CardsWrapper>
    </React.Fragment>
  );
}

export default Pokedex;
