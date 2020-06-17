import React from "react";
import Tipo, { tipos } from "../../Componentes/Tipo";
import { Title, Body14 } from "../../Componentes/Tipografia"
import "./index.css";

function Pokedex() {
  return (
    <div class="poketarjeta">
        <div class="poketarjeta-cabecera">
            <Title>Charizard</Title> <Body14>#006</Body14>
        </div>
        
        <div class="poketarjeta-tipos">
            <Tipo tipo={tipos.fuego}/>
            <Tipo tipo={tipos.volador}/>
        </div>
    </div>
  );
}

export default Pokedex;