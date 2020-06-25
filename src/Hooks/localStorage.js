import React from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = React.useState(() => {
    const localStoredValue = window.localStorage.getItem(key);
    if (localStoredValue === null) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    } else {
      return JSON.parse(localStoredValue);
    }
  });
  const setItem = (value) => {
    setState(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [state, setItem];
};
