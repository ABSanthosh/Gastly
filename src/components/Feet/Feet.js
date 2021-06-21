import "./Feet.scss";
import FourOFour from "../../Assets/Images/404.png";
import { forifier } from "../../Util/forifier";
import NewSprites from "../../Assets/JSON/PokemonData.json";
import { CapitalizeChar } from "../../Util/Capitalize";

function Feet({ pokeId }) {
  const URL = `https://gastly-dex.github.io/PokedexData/PokemonFootprints/${forifier(
    pokeId
  )}.png`;

  return (
    <>
      <img
        tabIndex={0}
        className="pokemonFeet"
        src={URL}
        alt="Pokemon Footprint"
        onError={() => {
          document.querySelector(".pokemonFeet").src = FourOFour;
        }}
        onMouseOver={() => {
          if (document.querySelector(".pokemonFeet").src == FourOFour) {
            document.querySelector(".pokemonFeet").title =
              "Footprint of this pokemon not available";
          } else {
            document.querySelector(".pokemonFeet").title = `${CapitalizeChar(
              NewSprites[forifier(pokeId)]["Name"]
            )}'s Foot print`;
          }
        }}
      />
    </>
  );
}

export default Feet;
