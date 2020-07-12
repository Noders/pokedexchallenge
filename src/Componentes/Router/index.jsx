import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Pokedex from "../../Paginas/Pokedex";
import Pokemon from "../../Paginas/Pokemon";
import Login from "../../Paginas/Login";
import Favoritos from "../../Paginas/Favoritos";
import { PokeRuta } from "../PokeRuta";
import { useLocalStorage } from "../../Hooks";
import { config } from "../../config";

const Error404 = () => <h1>Un gatito acaba de morir</h1>;

const useFavoritos = () => {
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);
  const [token] = useLocalStorage("token", "");
  const nuestroSetDeFavoritos = React.useMemo(() => {
    return new Set(favoritos);
  }, [favoritos]);

  React.useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-jwt-authentication-header", token);
    fetch(`${config.authenticationApiEndpoint}/favoritos`, {
      headers: myHeaders,
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setFavoritos(data.favorites);
      });
  }, []);

  const alternarFavoritos = React.useCallback(
    (idFavorito) => {
      const localFavoritos = new Set(nuestroSetDeFavoritos);
      if (localFavoritos.has(idFavorito)) {
        localFavoritos.delete(idFavorito);
      } else {
        localFavoritos.add(idFavorito);
      }
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("x-jwt-authentication-header", token);
      setFavoritos(Array.from(localFavoritos));
      fetch(`${config.authenticationApiEndpoint}/favoritos`, {
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify({
          favorites: favoritos,
        }),
      }).then((response) => response.json());
    },
    [nuestroSetDeFavoritos, setFavoritos, token]
  );

  return {
    favoritos: nuestroSetDeFavoritos,
    alternarFavoritos,
  };
};

const AuthenticatedRouter = ({ autenticado }) => {
  const { favoritos, alternarFavoritos } = useFavoritos();

  if (!autenticado) {
    return <Redirect to="/login" />;
  }
  return (
    <Switch>
      <PokeRuta path="/pokedex/:nombrePokemon" Componente={Pokemon} />
      <PokeRuta
        path="/pokedex"
        Componente={Pokedex}
        favoritos={favoritos}
        alternarFavorito={alternarFavoritos}
      />
      <PokeRuta
        path="/favoritos"
        Componente={Favoritos}
        favoritos={favoritos}
        alternarFavorito={alternarFavoritos}
      />
      <PokeRuta
        path="/"
        Componente={Error404}
        favoritos={favoritos}
        alternarFavorito={alternarFavoritos}
      />
    </Switch>
  );
};

AuthenticatedRouter.propTypes = {
  autenticado: PropTypes.bool.isRequired,
};

export const Router = () => {
  const [autenticado, setAutenticado] = useLocalStorage("autenticado", false);
  const [, setToken] = useLocalStorage("token", "");
  const history = useHistory();
  return (
    <Switch>
      <Route path="/login" exact>
        <Login
          enLoginExitoso={(token) => {
            setAutenticado(true);
            setToken(token);
            history.push("/pokedex");
          }}
        />
      </Route>
      <Route path="/tyc" exact>
        <h1>TYC</h1>
      </Route>
      <AuthenticatedRouter autenticado={autenticado} />
    </Switch>
  );
};
