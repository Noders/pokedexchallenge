import React from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PokeRuta = ({ path, Componente, ...props }) => (
  <Route
    path={path}
    render={(routeProps) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Componente params={routeProps.match.params} {...props} />
    )}
  />
);

PokeRuta.propTypes = {
  path: PropTypes.string.isRequired,
  Componente: PropTypes.func.isRequired,
};
