import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Pokedex from "../../Paginas/Pokedex";
import Login from "../../Paginas/Login";
import Favoritos from "../../Paginas/Favoritos";

const AuthenticatedRouter = ({ favoritos, alternarFavoritos, autenticado }) => {
  if (!autenticado) {
    return <Redirect to="/login" />;
  }
  return (
    <Switch>
      <Route path="/pokedex">
        <Pokedex favoritos={favoritos} alternarFavorito={alternarFavoritos} />
      </Route>
      <Route path="/favoritos">
        <Favoritos favoritos={favoritos} alternarFavorito={alternarFavoritos} />
      </Route>
      <Route path="/">
        <h1>Un gatito acaba de morir</h1>
      </Route>
    </Switch>
  );
};

AuthenticatedRouter.propTypes = {
  favoritos: PropTypes.instanceOf(Set).isRequired,
  alternarFavoritos: PropTypes.func.isRequired,
  autenticado: PropTypes.bool.isRequired,
};

export const Router = ({
  setAutenticado,
  favoritos,
  alternarFavoritos,
  autenticado,
}) => {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/login" exact>
        <Login
          enLoginExitoso={() => {
            setAutenticado(true);
            window.localStorage.setItem("autenticado", true);
            history.push("/pokedex");
          }}
        />
      </Route>
      <Route path="/tyc" exact>
        <h1>TYC</h1>
      </Route>
      <AuthenticatedRouter
        favoritos={favoritos}
        alternarFavoritos={alternarFavoritos}
        autenticado={autenticado}
      />
    </Switch>
  );
};

Router.propTypes = {
  setAutenticado: PropTypes.func.isRequired,
  autenticado: PropTypes.bool.isRequired,
  favoritos: PropTypes.instanceOf(Set).isRequired,
  alternarFavoritos: PropTypes.func.isRequired,
};
