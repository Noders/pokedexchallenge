import propTypes from "prop-types";

export const pokemonPageProps = {
  nombre: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  imagen: propTypes.string.isRequired,
  tipos: propTypes.arrayOf(propTypes.string).isRequired,
  alternarFavorito: propTypes.func.isRequired,
  esFavorito: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,
};
