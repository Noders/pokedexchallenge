import React from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = React.useState(() => {
    const localStoredValue = window.localStorage.getItem(key);
    if (localStoredValue === null) {
      window.localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    return JSON.parse(localStoredValue);
  });
  const setItem = React.useCallback(
    (value) => {
      const actualValue = value ?? defaultValue;
      setState(actualValue);
      window.localStorage.setItem(key, JSON.stringify(actualValue));
    },
    [key, defaultValue, setState]
  );
  return [state, setItem];
};
