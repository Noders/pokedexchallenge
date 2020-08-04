import React from "react";
import Pokedex from "./index";

export default {
  title: "Pokedex",
  component: Pokedex,
};

export const DefaultPokedex = () => <Pokedex />;

DefaultPokedex.story = {
  name: "Pokedex Vacio",
};
