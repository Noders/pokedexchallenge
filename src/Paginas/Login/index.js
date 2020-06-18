import React from "react";
import Boton from "../../Componentes/Boton";
import Input from "../../Componentes/Input";
import Panel from "../../Componentes/Panel";
import styled from "styled-components";

const UserFalso = {
  username: "LCJURY",
  password: "44554",
};

const Pagina = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PanelWrapper = styled.main`
  width: 500px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

function Login({ onPageChange }) {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onUsernameChange = (evento) => {
    setUserName(evento.target.value);
  };
  const onPasswordChange = (evento) => {
    setPassword(evento.target.value);
  };
  const intentarLoginAsincrono = () => {
    if (userName === UserFalso.username && password === UserFalso.password) {
      onPageChange("pokedex");
    }
  };

  return (
    <Pagina>
      <PanelWrapper>
        <Panel>
          <InputWrapper>
            <Input onChange={onUsernameChange} label="Username" />
          </InputWrapper>
          <InputWrapper>
            <Input onChange={onPasswordChange} label="Password" />
          </InputWrapper>
          <ButtonWrapper>
            <Boton onClick={intentarLoginAsincrono}>Ingresar</Boton>
            <Boton tipo="secundario">?????</Boton>
          </ButtonWrapper>
        </Panel>
      </PanelWrapper>
    </Pagina>
  );
}

export default Login;
