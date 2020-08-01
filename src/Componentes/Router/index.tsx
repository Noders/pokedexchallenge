/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Pokedex from "../../Paginas/Pokedex";
import Pokemon from "../../Paginas/Pokemon";
import Login from "../../Paginas/Login";
import Favoritos from "../../Paginas/Favoritos";
import { useLocalStorage } from "../../Hooks";
import { pokeAuth } from "../../Servicios";
import { agregarFavoritos } from "../../Data/reducers";

const Error404 = () => <h1>Un gatito acaba de morir</h1>;

const AuthenticatedRouter = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const onMount = async () => {
      const { favorites } = await pokeAuth.obtenerFavoritos();
      dispatch(agregarFavoritos(favorites));
    };
    onMount();
  }, []);

  return (
    <Switch>
      <Route path="/pokedex/:nombrePokemon">
        <Pokemon />
      </Route>
      <Route path="/pokedex">
        <Pokedex />
      </Route>
      <Route path="/favoritos">
        <Favoritos />
      </Route>
      <Route path="/">
        <Error404 />
      </Route>
    </Switch>
  );
};

const Authentication: React.FC<{ token: string }> = ({ token }) => {
  if (!token) {
    return <Redirect to="/login" />;
  }
  return <AuthenticatedRouter />;
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
      <Authentication token={token} />
    </Switch>
  );
};
