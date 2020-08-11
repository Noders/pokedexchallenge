import React from "react";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import Input from "../../Componentes/Input";
import { useFavoritos } from "../../Hooks";
import { Loading, tamanosLoader } from "../../Componentes/Loading";
import { pokemonesQuery } from "./queries";
import { getAllPokemones } from "./__generated__/getAllPokemones";

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

function Pokedex() {
  const [filter, setFilter] = React.useState("");
  const { isFavorito } = useFavoritos();
  const { loading, data, error } = useQuery<getAllPokemones>(pokemonesQuery);
  const pokemones = data?.pokemones || [];
  const pokeTarjetasFiltradas = React.useMemo(
    () =>
      pokemones // array de pokemones
        .filter(({ nombre }) =>
          nombre.toLowerCase().includes(filter.toLowerCase())
        )
        .map((pokemon) => {
          const { nombre, id, numero, tipos, imagen } = pokemon;
          return (
            <PokeTarjeta
              nombre={nombre}
              key={id}
              id={numero}
              tipos={tipos}
              imagen={imagen}
              numero={numero}
              esFavorito={isFavorito(numero)}
            />
          );
        }),
    [filter, isFavorito, pokemones]
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
      {loading ? (
        <Loading tamano={tamanosLoader.grande} />
      ) : (
        <CardsWrapper>{pokeTarjetasFiltradas}</CardsWrapper>
      )}
    </React.Fragment>
  );
}

export default Pokedex;
