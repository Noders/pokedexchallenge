import { combineReducers, createAction, createReducer } from "@reduxjs/toolkit";

type favoritosStateType = number[];
// acciones
export const alternarFavoritos = createAction<number>("alternarFavoritos");
export const agregarFavoritos = createAction<number[]>("agregarFavoritos");
export const setearFavoritos = createAction<number[]>("setearFavoritos");

// const fetchPokemons = () => (dispatch) => {
//   fetch().then(() => {
//     // dispatch(alternarFavoritos());
//     // dispatch(agregarFavoritos());
//   });
// };

// dispatch(fetchPokemons());
// dispatch = (arg) => {
//   if typeof arg === 'function' {
//     arg(dispatch)
//   }
// }

const favoritosReducer = createReducer<favoritosStateType>([], (builder) =>
  builder
    .addCase(alternarFavoritos, (state, action) => {
      const currentFavoritos = new Set(state);
      if (currentFavoritos.has(action.payload)) {
        currentFavoritos.delete(action.payload);
      } else {
        currentFavoritos.add(action.payload);
      }
      return state;
    })
    .addCase(agregarFavoritos, (state, action) => {
      return Array.from(new Set([...state, ...action.payload]));
    })
    .addCase(setearFavoritos, (state, action) => {
      return Array.from(new Set([...action.payload]));
    })
);

export const rootReducer = combineReducers({
  favoritos: favoritosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
