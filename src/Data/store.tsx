import { createStore } from "redux";
import { rootReducer } from "./reducers";

const w = window as any;

export const store = createStore(
  rootReducer,
  w?.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

export type RootState = ReturnType<typeof store.getState>;
