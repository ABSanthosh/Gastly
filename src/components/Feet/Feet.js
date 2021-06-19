import "./Feet.scss";
import FourOFour from "../../Assets/Images/404.png";
import { forifier } from "../../Util/forifier";
import NewSprites from "../../Assets/FromOldJson.json";

function CapitalizeChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Feet({ pokeId }) {
  const URL = `https://gastly-dex.github.io/PokedexData/PokemonFootprints/${forifier(
    pokeId
  )}.png`;

  return (
    <>
      <img
        className="pokemonFeet"
        src={URL}
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
