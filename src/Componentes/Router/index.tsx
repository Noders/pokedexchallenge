/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Provider } from "react-redux";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import Pokedex from "../../Paginas/Pokedex";
import Pokemon from "../../Paginas/Pokemon";
import Login from "../../Paginas/Login";
import Favoritos from "../../Paginas/Favoritos";
import { useLocalStorage, useFavoritos } from "../../Hooks";
import { store } from "../../Data/store";

const Error404 = () => <h1>Un gatito acaba de morir</h1>;

type AuthenticatedRouterProps = { autenticado: boolean };
const AuthenticatedRouter = ({ autenticado }: AuthenticatedRouterProps) => {
  const { favoritos, alternarFavorito } = useFavoritos();
  if (!autenticado) {
    return <Redirect to="/login" />;
  }
  const routeProps = {
    favoritos,
    alternarFavorito,
  };
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/pokedex/:nombrePokemon">
          <Pokemon />
        </Route>
        <Route path="/pokedex">
          <Pokedex {...routeProps} />
        </Route>
        <Route path="/favoritos">
          <Favoritos {...routeProps} />
        </Route>
        <Route path="/">
          <Error404 />
        </Route>
      </Switch>
    </Provider>
  );
};

export const Router = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const history = useHistory();

  return (
    <Switch>
      <Route path="/login" exact>
        <Login
          token={token}
          enLoginExitoso={(previousToken) => {
            setToken(previousToken);
            history.push("/pokedex");
          }}
        />
      </Route>
      <Route path="/tyc" exact>
        <h1>TYC</h1>
      </Route>
      <AuthenticatedRouter autenticado={Boolean(token)} />
    </Switch>
  );
};
