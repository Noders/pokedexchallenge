import React from "react";
import "./index.css";

function Boton(props) {
  let tipo = "primario";
  if (props.tipo === "secundario") {
    tipo = "secundario";
  }
  return <button class={`button ${tipo}`}>{props.children}</button>;
}

export default Boton;
