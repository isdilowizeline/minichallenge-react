import { mockPokemonData as pokeData } from "../mock/pokeData";
import React from "react";
/*class PokeCard extends React.Component {
  render() {
    return (
      <div>
        <h1>{pokeData.name}</h1> <br />
        <img src={pokeData.sprites.front_default} /> <br />
        <img src={pokeData.sprites.front_shiny} /> <br />
        <a target="_blank" href={pokeData.video}>
          Video
        </a>
        <br />
      </div>
    );
  }
}
export default PokeCard;*/
const PokeCard = () => (
  <div>
    <div className="pokemonName">
      <h1>{pokeData.name}</h1>
    </div>
    <div className="pokemonSpritesDefault">
      <img src={pokeData.sprites.front_default} alt={pokeData.name} />
    </div>
    <div className="pokemonSpritesShiny">
      <img src={pokeData.sprites.front_shiny} alt={pokeData.name} />
    </div>
    <div className="pokemonVideo">
      <a target="_blank" href={pokeData.video}>
        Video
      </a>
    </div>
  </div>
);

export default PokeCard;
