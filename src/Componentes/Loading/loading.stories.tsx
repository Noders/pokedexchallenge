import React from "react";
import { Loading, tamanosLoader } from "./index";

export default {
  title: "Loading",
  component: Loading,
};

export const Pequeno = () => <Loading />;

export const Mediano = () => <Loading tamano={tamanosLoader.mediano} />;

export const Grande = () => <Loading tamano={tamanosLoader.grande} />;
