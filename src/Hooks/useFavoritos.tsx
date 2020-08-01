import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeAuth } from "../Servicios";
import { setearFavoritos, RootState } from "../Data/reducers";

export type AlternarFavoritoType = (id: number) => void;

export type FavoritosType = Set<number>;

export const FavoritosContext = React.createContext<{
  favoritos: FavoritosType;
  alternarFavorito: AlternarFavoritoType;
}>({ favoritos: new Set(), alternarFavorito: () => {} });
FavoritosContext.displayName = "FavoritosContext";

export const useFavoritos = () => {
  const dispatch = useDispatch();
  const favoritos = useSelector<RootState, number[]>(
    (state) => state.favoritos
  );
  const favoritosSet = React.useMemo(() => new Set(favoritos), [favoritos]);

  const nuestroSetDeFavoritos = React.useMemo(() => {
    return new Set<number>(favoritos);
  }, [favoritos]);

  const alternarFavorito = React.useCallback(
    async (idFavorito: number) => {
      let response;
      if (nuestroSetDeFavoritos.has(idFavorito)) {
        response = pokeAuth.borrarFavorito(idFavorito);
        nuestroSetDeFavoritos.delete(idFavorito);
      } else {
        response = pokeAuth.setearFavorito(idFavorito);
        nuestroSetDeFavoritos.add(idFavorito);
      }
      dispatch(setearFavoritos(Array.from(nuestroSetDeFavoritos)));
      const { newFavorites } = await response;
      dispatch(setearFavoritos(newFavorites));
    },
    [nuestroSetDeFavoritos, dispatch]
  );

  const isFavorito = React.useCallback(
    (id: number) => {
      return favoritosSet.has(id);
    },
    [favoritosSet]
  );

  return { alternarFavorito, favoritos, isFavorito };
};
