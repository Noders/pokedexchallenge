/* eslint-disable no-param-reassign */
import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";

export const setFavoritos = createAction<number[]>("setFavoritos");
export const alternarFavorito = createAction<number>("alternarFavorito");

const favoritosReducer = createReducer<{
  favoritos: number[];
}>(
  {
    favoritos: [],
  },
  (builder) =>
    builder
      .addCase(setFavoritos, (state, action) => {
        console.log({ action });
        state.favoritos = [...action.payload];
      })
      .addCase(alternarFavorito, (state, action) => {
        console.log("alternarFavorito", state, action);
      })
);

export const rootReducer = combineReducers({
  favoritos: favoritosReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
