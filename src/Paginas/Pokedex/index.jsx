import React from "react";
import { getPokemonsByNames } from "@fforres/pokemon-local-database";
import styled from "styled-components";
import PropTypes from "prop-types";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import Input from "../../Componentes/Input";

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

function Pokedex({ alternarFavorito, favoritos }) {
  const [filter, setFilter] = React.useState("");
  const pokeTarjetasFiltradas = React.useMemo(
    () =>
      pokemonesFiltrados
        .filter(({ name }) => name.english.toLowerCase().includes(filter))
        .map((pokemon) => {
          const { name: nombre, id, type: tipos } = pokemon;
          const parsedId = id.toString().padStart(3, "0");
          const url = `https://raw.githubusercontent.com/fforres/pokemon-local-database/master/src/data/thumbnails/${parsedId}.png`;
          return (
            <PokeTarjeta
              nombre={nombre.english}
              key={id}
              id={parsedId}
              imagen={url}
              tipos={tipos}
              esFavorito={favoritos.has(id)}
              alternarFavorito={() => alternarFavorito(id)}
            />
          );
        }),
    [alternarFavorito, favoritos, filter]
  );

  return (
    <React.Fragment>
      <InputWrapper>
        <Input
          name="Filter"
          onChange={(evento) => {
            setFilter(evento.target.value);
          }}
        />
      </InputWrapper>
      <CardsWrapper>{pokeTarjetasFiltradas}</CardsWrapper>
    </React.Fragment>
  );
}

Pokedex.propTypes = {
  favoritos: PropTypes.instanceOf(Set).isRequired,
  alternarFavorito: PropTypes.func.isRequired,
};

export default Pokedex;
