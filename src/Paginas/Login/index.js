import React from "react";
import Boton from "../../Boton";
import Input from "../../Input";
import Panel from "../../Panel";

function Login() {
  return (
    <div className="App">
     <Panel>
        <Input label="Username" />
        <Input label="Password" />
        <div className="layout-horizontal">
          <Boton>Ingresar</Boton>
          <Boton tipo="secundario">?????</Boton>
        </div>
      </Panel>
    </div>
  );
}

export default Login;
