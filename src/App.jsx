import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Componentes/Router';
import { Navigation } from './Componentes/Navigation';
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from './Estilos';
import { useLocalStorage } from './Hooks';

function App() {
  const [favoritos, setFavoritos] = useLocalStorage('favoritos', []);
  const [autenticado, setAutenticado] = useLocalStorage('autenticado', false);
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
    <>
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
    </>
  );
}

export default App;
