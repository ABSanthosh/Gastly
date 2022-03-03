import style from "./EvalChainItem.module.scss";
import { CapitalizeChar } from "../../Utils/Capitalize";

function EvalChainItem({ pokeId, className, NewSprites }) {
  
  let SpriteJson = Object.keys(NewSprites["Sprites"]);
  let evalSprite;

  if (SpriteJson.includes("NoGenNormal")) {
    evalSprite = NewSprites["Sprites"]["NoGenNormal"];
  } else if (SpriteJson.includes("UnknownNormal")) {
    evalSprite = NewSprites["Sprites"]["UnknownNormal"];
  } else if (SpriteJson.includes("MaleOnlyNormal")) {
    evalSprite = NewSprites["Sprites"]["MaleOnlyNormal"];
  } else if (SpriteJson.includes("FemaleOnlyNormal")) {
    evalSprite = NewSprites["Sprites"]["FemaleOnlyNormal"];
  } else if (SpriteJson.includes("NormalMale")) {
    evalSprite = NewSprites["Sprites"]["NormalMale"];
  } else if (SpriteJson.includes("NormalFemale")) {
    evalSprite = NewSprites["Sprites"]["NormalFemale"];
  }

  return (
    <a
      href={`/${parseInt(pokeId)}`}
      tabIndex={0}
      data-tooltip={CapitalizeChar(NewSprites["Name"])}
      className={`${style.EvalChainItem} ${className} ${style.EvalChainItem__tooltips}`}
    >
      <img
        crossOrigin="projectpokemon.org"
        src={evalSprite}
        alt={"Pokemon"}
        className={style.EvalChainItem__Sprite}
      />
    </a>
  );
}

export default EvalChainItem;
