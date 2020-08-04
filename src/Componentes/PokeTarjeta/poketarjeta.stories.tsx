import React from "react";
import { PokeTarjeta, PokeTarjetaProps } from "./index";
import { routerDecorator } from "../../../.storybook/decorators";
import missingno from "./missingno.jpg";

const pokeTarjetaProps: PokeTarjetaProps = {
  nombre: "Missingno",
  id: 123,
  tipos: ["Normal"],
  esFavorito: false,
};

export default {
  title: "PokeTarjeta",
  component: PokeTarjeta,
  decorators: [routerDecorator],
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Default = () => <PokeTarjeta {...pokeTarjetaProps} />;

// eslint-disable-next-line react/jsx-props-no-spreading
export const Favorito = () => <PokeTarjeta {...pokeTarjetaProps} esFavorito />;
