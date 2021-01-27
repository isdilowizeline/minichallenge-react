import { mockPokemonData as pokeData } from "../mock/pokeData";
/*import React from "react";
class PokeCard extends React.Component {
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
    <h1>{pokeData.name}</h1> <br />
    <img src={pokeData.sprites.front_default} /> <br />
    <img src={pokeData.sprites.front_shiny} /> <br />
    <a target="_blank" href={pokeData.video}>
      Video
    </a>
    <br />
  </div>
);

export default PokeCard;
