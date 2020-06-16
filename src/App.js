import React from "react";
import Boton from "./Boton";
import Input from "./Input";
import Panel from "./Panel";
import "./App.css";
import "./normalize.css";

function App() {
  return (
    <div className="App">
      {/**
     <Panel>
        <Input label="Username" />
        <Input label="Password" />
        <div className="layout-horizontal">
          <Boton>Ingresar</Boton>
          <Boton tipo="secundario">?????</Boton>
        </div>
      </Panel>
    */}

      <Input label="Username" />
    </div>
  );
}

export default App;
