import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
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
  token: string;
  enLoginExitoso: (token: string) => void;
}

function Login({ token, enLoginExitoso }: Props) {
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

  if (token) {
    return <Redirect to="/pokedex" />;
  }

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

Login.propTypes = {
  enLoginExitoso: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
};

export default Login;
