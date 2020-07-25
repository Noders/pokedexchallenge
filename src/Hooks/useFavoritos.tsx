import React from "react";
import { useLocalStorage } from "./localStorage";
import { pokeAuth } from "../Servicios";

const dummyArray = [] as any[];

export type AlternarFavoritoType = (id: number) => void;

export type FavoritosType = Set<number>;

export const FavoritosContext = React.createContext<{
  favoritos: FavoritosType;
  alternarFavorito: AlternarFavoritoType;
}>({ favoritos: new Set(), alternarFavorito: () => {} });
FavoritosContext.displayName = "FavoritosContext";
// Crear contexto de favoritos
// acceder al contexto dentro el

export const useFavoritos = (): {
  favoritos: FavoritosType;
  alternarFavorito: AlternarFavoritoType;
} => {
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", dummyArray);
  const nuestroSetDeFavoritos = React.useMemo(() => {
    return new Set<number>(favoritos);
  }, [favoritos]);

  React.useEffect(() => {
    const onMount = async () => {
      const { favorites } = await pokeAuth.obtenerFavoritos();
      setFavoritos(favorites);
    };
    onMount();
  }, [setFavoritos]);

  const alternarFavorito = React.useCallback(
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
    [nuestroSetDeFavoritos, setFavoritos]
  );

  return {
    favoritos: nuestroSetDeFavoritos,
    alternarFavorito,
  };
};
