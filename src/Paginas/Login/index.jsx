import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Boton } from '../../Componentes/Boton';
import Input from '../../Componentes/Input';
import Panel from '../../Componentes/Panel';

const UserFalso = {
  username: 'LCJURY',
  password: '44554',
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

const TituloFancy = styled.h1`
  font-size: 46px;
  line-height: 72px;
  font-family: "Rock Salt";
  position: absolute;
  margin: 0;
  top: -100px;
  left: 50%;
  transform: rotate(-9deg) translateX(-50%);
  background: -webkit-linear-gradient(40deg, #7660de, #93e16f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
`;

function Login({ enLoginExitoso }) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const onUsernameChange = (evento) => {
    setUserName(evento.target.value);
  };
  const onPasswordChange = (evento) => {
    setPassword(evento.target.value);
  };
  const intentarLoginAsincrono = () => {
    if (userName === UserFalso.username && password === UserFalso.password) {
      enLoginExitoso();
    }
  };

  return (
    <Pagina>
      <PanelWrapper>
        <Panel>
          <TituloFancy>
            30 Dias
            {' '}
            <br />
            de React
          </TituloFancy>
          <InputWrapper>
            <Input onChange={onUsernameChange} label="Username" name="username" />
          </InputWrapper>
          <InputWrapper>
            <Input onChange={onPasswordChange} label="Password" name="password" />
          </InputWrapper>
          <ButtonWrapper>
            <Boton onClick={intentarLoginAsincrono}>Ingresar</Boton>
            <Boton onClick={() => {}} tipo="secundario">?????</Boton>
          </ButtonWrapper>
        </Panel>
      </PanelWrapper>
    </Pagina>
  );
}

Login.propTypes = {
  enLoginExitoso: PropTypes.func.isRequired,
};

export default Login;
