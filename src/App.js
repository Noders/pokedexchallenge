import React from "react";
import { Router } from "./Componentes/Router";
import { Navigation } from "./Componentes/Navigation";
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from "./Estilos";
import { BrowserRouter } from "react-router-dom";
import { useLocalStorage } from "./Hooks";

function App() {
  const [favoritos, setFavoritos] = useLocalStorage("favoritos", []);
  const [autenticado, setAutenticado] = useLocalStorage("autenticado", false);
  const nuestroSetDeFavoritos = new Set(favoritos);

  const alternarFavoritos = (idFavorito) => {
    if (nuestroSetDeFavoritos.has(idFavorito)) {
      nuestroSetDeFavoritos.delete(idFavorito);
    } else {
      nuestroSetDeFavoritos.add(idFavorito);
    }
    setFavoritos(Array.from(nuestroSetDeFavoritos));
  };

  return (
    <React.Fragment>
      <GlobalAppStyles />
      <GlobalReset />
      <GlobalFontStyles />
      <BrowserRouter>
        <Navigation />
        <Router
          favoritos={nuestroSetDeFavoritos}
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          alternarFavoritos={alternarFavoritos}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
