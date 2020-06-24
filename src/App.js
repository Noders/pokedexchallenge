import React from "react";
import Pokedex from "./Paginas/Pokedex";
import Login from "./Paginas/Login";
import Favoritos from "./Paginas/Favoritos";
import { Navigation } from "./Componentes/Navigation";
import { GlobalFontStyles, GlobalReset, GlobalAppStyles } from "./Estilos";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

const AuthenticatedRouter = ({ favoritos, alternarFavoritos, autenticado }) => {
  if (!autenticado) {
    console.log("te voy a mandar al login!");
    return <Redirect to="/login" />;
  }
  return (
    <Switch>
      <Route path="/pokedex">
        <Pokedex favoritos={favoritos} alternarFavorito={alternarFavoritos} />
      </Route>
      <Route path="/favoritos">
        <Favoritos favoritos={favoritos} alternarFavorito={alternarFavoritos} />
      </Route>
      <Route path="/">
        <h1>Un gatito acaba de morir</h1>
      </Route>
    </Switch>
  );
};

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = React.useState(
    window.localStorage.getItem(key) || defaultValue
  );
  const setItem = (value) => {
    window.localStorage.setItem(key, value);
    setState(value);
  };

  return [state, setItem];
};

const Router = ({
  setAutenticado,
  favoritos,
  alternarFavoritos,
  autenticado,
}) => {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/login" exact>
        <Login
          enLoginExitoso={() => {
            setAutenticado(true);
            window.localStorage.setItem("autenticado", true);
            history.push("/pokedex");
          }}
        />
      </Route>
      <Route path="/tyc" exact>
        <h1>TYC</h1>
      </Route>
      <AuthenticatedRouter
        favoritos={favoritos}
        alternarFavoritos={alternarFavoritos}
        autenticado={autenticado}
      />
    </Switch>
  );
};

function App() {
  const [algunaCosa, setAlgunaCosa] = useLocalStorage(
    "algunaCosa",
    "valorpordefecto"
  );
  console.log(algunaCosa, setAlgunaCosa);
  const [favoritos, setFavoritos] = React.useState(
    new Set(JSON.parse(window.localStorage.getItem("favoritos")) || [])
  );
  const [autenticado, setAutenticado] = React.useState(
    window.localStorage.getItem("autenticado") || false
  );
  const alternarFavoritos = React.useCallback((idFavorito) => {
    setFavoritos((favoritos) => {
      const newFavoritos = new Set(favoritos);
      if (favoritos.has(idFavorito)) {
        newFavoritos.delete(idFavorito);
      } else {
        newFavoritos.add(idFavorito);
      }
      const parsedFavoritos = JSON.stringify(Array.from(newFavoritos));
      window.localStorage.setItem("favoritos", parsedFavoritos);
      return newFavoritos;
    });
  }, []);

  return (
    <React.Fragment>
      <GlobalAppStyles />
      <GlobalReset />
      <GlobalFontStyles />
      <BrowserRouter>
        <Navigation />
        <Router
          favoritos={favoritos}
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          alternarFavoritos={alternarFavoritos}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
