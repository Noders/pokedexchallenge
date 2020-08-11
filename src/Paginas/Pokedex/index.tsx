import React from "react";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { PokeTarjeta } from "../../Componentes/PokeTarjeta";
import Input from "../../Componentes/Input";
import { useFavoritos } from "../../Hooks";
import { Loading, tamanosLoader } from "../../Componentes/Loading";

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

const pokemonesQuery = gql`
  query getPokemones {
    pokemones {
      nombre
      tipos
      id
      imagen
      numero
    }
  }
`;

function Pokedex() {
  const [filter, setFilter] = React.useState("");
  const { isFavorito } = useFavoritos();
  const { loading, data, error } = useQuery(pokemonesQuery);
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
              id={id}
              tipos={tipos}
              imagen={imagen}
              numero={numero}
              esFavorito={isFavorito(id)}
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
