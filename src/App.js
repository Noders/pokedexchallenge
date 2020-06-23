import React from "react";
import Pokedex from "./Paginas/Pokedex";
import Login from "./Paginas/Login";
import Favoritos from "./Paginas/Favoritos";
import { Navigation } from "./Componentes/Navigation";
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from "./Estilos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [favoritos, setFavoritos] = React.useState(new Set());

  const aleternarFavoritos = React.useCallback((idFavorito) => {
    setFavoritos((favoritos) => {
      const newFavoritos = new Set(favoritos);
      if (favoritos.has(idFavorito)) {
        newFavoritos.delete(idFavorito);
      } else {
        newFavoritos.add(idFavorito);
      }
      return newFavoritos;
    });
  }, []);

  return (
    <React.Fragment>
      <Router>
        <GlobalAppStyles />
        <GlobalReset />
        <GlobalFontStyles />
        <Navigation />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/pokedex">
            <Pokedex
              favoritos={favoritos}
              alternarFavorito={aleternarFavoritos}
            />
          </Route>
          <Route path="/favoritos">
            <Favoritos
              favoritos={favoritos}
              alternarFavorito={aleternarFavoritos}
            />
          </Route>
          <Route path="/">
            <div>hola</div>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
