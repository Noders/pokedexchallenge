import React from "react";
import { Link } from "react-router-dom";
import Tipo, { pokeTipos } from "../Tipo";
import { Body14 } from "../Tipografia";
import { Favorito } from "../Favorito";
import {
  PoketarjetaWrapper,
  PokeCuerpo,
  PokeImagen,
  PokeCabecera,
  ContenedorDeTipos,
  StyledLink,
} from "./elements";
import { useFavoritos } from "../../Hooks/useFavoritos";

export const MapaDeTipos = {
  Fire: pokeTipos.fuego,
  Flying: pokeTipos.volador,
  Electric: pokeTipos.electrico,
  Grass: pokeTipos.planta,
  Poison: pokeTipos.veneno,
  Normal: pokeTipos.normal,
  Ground: pokeTipos.tierra,
  Rock: pokeTipos.roca,
  Bug: pokeTipos.insecto,
  Ghost: pokeTipos.fantasma,
  Steel: pokeTipos.metal,
  Water: pokeTipos.agua,
  Psychic: pokeTipos.psiquico,
  Ice: pokeTipos.hielo,
  Dragon: pokeTipos.dragon,
  Dark: pokeTipos.veneno,
  Fairy: pokeTipos.hada,
  Fighting: pokeTipos.luchador,
} as {
  [key: string]: string;
};

const isServerSideRendering = typeof window === "undefined";
const useDeferedRendering = () => {
  const [render, setRender] = React.useState(isServerSideRendering);
  React.useEffect(() => {
    if (isServerSideRendering) {
      return () => {};
    }
    const handle = window.requestIdleCallback(() => {
      setRender(true);
    });
    // We need to return different cleanup functions depending on the branch taken here
    return () => window.cancelIdleCallback(handle);
  }, []);
  return render;
};

export type PokeTarjetaProps = {
  nombre: string;
  id: number;
  tipos: string[];
  esFavorito: boolean;
};

export function PokeTarjeta({
  nombre,
  id,
  tipos,
  esFavorito,
}: PokeTarjetaProps) {
  const render = useDeferedRendering();
  const parsedId = id.toString().padStart(3, "0");
  const imagen = `https://raw.githubusercontent.com/fforres/pokemon-local-database/master/src/data/thumbnails/${parsedId}.png`;
  const { alternarFavorito } = useFavoritos();
  return (
    <PoketarjetaWrapper data-testid="poke-tarjeta">
      {render ? (
        <React.Fragment>
          <PokeCabecera data-testid="poke-cabecera">
            <span>
              <StyledLink to={`/pokedex/${nombre}`}>{nombre}</StyledLink>
              <Favorito
                onClick={() => alternarFavorito(id)}
                esFavorito={esFavorito}
              />
            </span>
            <Body14>{`#${parsedId}`}</Body14>
          </PokeCabecera>
          <PokeCuerpo>
            <Link to={`/pokedex/${nombre}`}>
              <PokeImagen src={imagen} />
            </Link>
          </PokeCuerpo>
          <ContenedorDeTipos>
            {tipos.map((tipo) => (
              <Tipo
                key={tipo}
                tipo={MapaDeTipos[tipo] as keyof typeof pokeTipos}
                tipo-original={tipo}
              />
            ))}
          </ContenedorDeTipos>
        </React.Fragment>
      ) : (
        <div>Loading</div>
      )}
    </PoketarjetaWrapper>
  );
}

export default React.memo(PokeTarjeta);
