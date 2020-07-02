import React from "react";
import Pokedex from "./index";

export default {
  title: "Pokedex",
  component: Pokedex,
};

export const DefaultPokedex = () => (
  <Pokedex alternarFavorito={() => {}} favoritos={new Set()} />
);

DefaultPokedex.story = {
  name: "Pokedex Vacio",
};
