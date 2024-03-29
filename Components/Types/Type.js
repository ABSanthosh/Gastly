import style from "./Types.module.scss";

import Bug from "./Asset/bug.svg";
import Dark from "./Asset/dark.svg";
import Dragon from "./Asset/dragon.svg";
import Electric from "./Asset/electric.svg";
import Fairy from "./Asset/fairy.svg";
import Fighting from "./Asset/fighting.svg";
import Fire from "./Asset/fire.svg";
import Flying from "./Asset/flying.svg";
import Ghost from "./Asset/ghost.svg";
import Grass from "./Asset/grass.svg";
import Ground from "./Asset/ground.svg";
import Ice from "./Asset/ice.svg";
import Normal from "./Asset/normal.svg";
import Poison from "./Asset/poison.svg";
import Psychic from "./Asset/psychic.svg";
import Rock from "./Asset/rock.svg";
import Steel from "./Asset/steel.svg";
import Water from "./Asset/water.svg";

function Type({ type }) {
  const pokeImportList = {
    bug: Bug,
    dark: Dark,
    dragon: Dragon,
    electric: Electric,
    fairy: Fairy,
    fighting: Fighting,
    fire: Fire,
    flying: Flying,
    ghost: Ghost,
    grass: Grass,
    ground: Ground,
    ice: Ice,
    normal: Normal,
    poison: Poison,
    psychic: Psychic,
    rock: Rock,
    steel: Steel,
    water: Water,
    placeholder: Water,
  };

  return (
    <>
      {type != "placeholder" ? (
        <div
          tabIndex={0}
          data-tooltip={type.charAt(0).toUpperCase() + type.slice(1)}
          className={`${style.tooltip} ${style.Type} ${
            style[type.toLowerCase()]
          }`}
        >
          <img
            alt={type.toLowerCase()}
            src={pokeImportList[type.toLowerCase()].src}
          />
        </div>
      ) : (
        <div className={`${style.Type} ${style[type.toLowerCase()]}`}></div>
      )}
    </>
  );
}

export default Type;
