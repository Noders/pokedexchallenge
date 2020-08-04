/* eslint-disable no-console */
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";

const logger = (store) => (next) => (action) => {
  console.info("dispatching", action);
  const result = next(action);
  console.info("next state", store.getState());
  return result;
};

export const store = createStore(rootReducer, applyMiddleware(logger));
