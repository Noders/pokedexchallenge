import React from "react";
import { useLocalStorage } from ".";
import { pokeAuth } from "../Servicios";

const dummyArray = [];
export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", dummyArray);
  // const [token] = useLocalStorage("token", "");
  const token = "";
  const nuestroSetDeFavoritos = React.useMemo(() => {
    return new Set(favoritos);
  }, [favoritos]);

  React.useEffect(() => {
    const onMount = async () => {
      const { favorites } = await pokeAuth.obtenerFavoritos();
      setFavoritos(favorites);
    };
    onMount();
  }, [setFavoritos]);

  const alternarFavoritos = React.useCallback(
    async (idFavorito) => {
      const localFavoritos = new Set(nuestroSetDeFavoritos);
      let response;
      if (localFavoritos.has(idFavorito)) {
        response = pokeAuth.borrarFavorito(idFavorito);
        localFavoritos.delete(idFavorito);
      } else {
        response = pokeAuth.setearFavorito(idFavorito);
        localFavoritos.add(idFavorito);
      }
      setFavoritos(Array.from(localFavoritos));
      const { newFavorites } = await response;
      setFavoritos(newFavorites);
    },
    [nuestroSetDeFavoritos, setFavoritos, token]
  );

  return {
    favoritos: nuestroSetDeFavoritos,
    alternarFavoritos,
  };
};
