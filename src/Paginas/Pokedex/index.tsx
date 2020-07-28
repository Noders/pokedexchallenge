import React from "react";
import { getPokemonsByNames } from "@fforres/pokemon-local-database";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import Input from "../../Componentes/Input";
import { AlternarFavoritoType, FavoritosType } from "../../Hooks/useFavoritos";
import { alternarFavoritos } from "../../Data/reducers";

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

interface Props {
  // alternarFavorito: AlternarFavoritoType;
  favoritos: FavoritosType;
}

function Pokedex({ favoritos }: Props) {
  const [filter, setFilter] = React.useState("");
  const dispatch = useDispatch();
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
              alternarFavorito={() => dispatch(alternarFavoritos(id))}
            />
          );
        }),
    [dispatch, favoritos, filter]
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
