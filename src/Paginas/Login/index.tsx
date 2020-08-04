import React from "react";
import { Boton } from "../../Componentes/Boton";
import Input from "../../Componentes/Input";
import Panel from "../../Componentes/Panel";
import { pokeAuth } from "../../Servicios";
import {
  Pagina,
  PanelWrapper,
  ButtonWrapper,
  InputWrapper,
  TituloFancy,
} from "./elements";

interface Props {
  enLoginExitoso: (token: string) => void;
}

function Login({ enLoginExitoso }: Props) {
  const [usuario, setUsuario] = React.useState("");
  const [password, setPassword] = React.useState("");

  const intentarLoginAsincrono = async () => {
    try {
      const { token: responseToken } = await pokeAuth.login({
        usuario,
        password,
      });
      enLoginExitoso(responseToken);
    } catch (e) {
      // TODO: (felipe) hacer algo en el error
    }
  };

  return (
    <Pagina>
      <PanelWrapper>
        <Panel>
          <TituloFancy>
            30 Dias
            <br />
            de React
          </TituloFancy>
          <InputWrapper>
            <Input
              onChange={(evento) => {
                setUsuario(evento.target.value);
              }}
              label="Username"
              name="username"
            />
          </InputWrapper>
          <InputWrapper>
            <Input
              onChange={(evento) => {
                setPassword(evento.target.value);
              }}
              label="Password"
              name="password"
              type="password"
            />
          </InputWrapper>
          <ButtonWrapper>
            <Boton onClick={intentarLoginAsincrono}>Ingresar</Boton>
            <Boton onClick={() => {}} tipo="secundario">
              ?????
            </Boton>
          </ButtonWrapper>
        </Panel>
      </PanelWrapper>
    </Pagina>
  );
}

export default Login;
