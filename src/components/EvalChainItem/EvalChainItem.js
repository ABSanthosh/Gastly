import "./EvalChainItem.scss";
import NewSprites from "../../Assets/FromOldJson.json";
import { useHistory } from "react-router-dom";

function CapitalizeChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function EvalChainItem({ pokeId, className }) {
  let googleProxyURL =
    "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

  let SpriteJson = Object.keys(NewSprites[pokeId]["Sprites"]);
  let evalSprite;
  let history = useHistory();

  if (SpriteJson.includes("NoGenNormal")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["NoGenNormal"];
  } else if (SpriteJson.includes("UnknownNormal")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["UnknownNormal"];
  } else if (SpriteJson.includes("MaleOnlyNormal")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["MaleOnlyNormal"];
  } else if (SpriteJson.includes("FemaleOnlyNormal")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["FemaleOnlyNormal"];
  } else if (SpriteJson.includes("NormalMale")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["NormalMale"];
  } else if (SpriteJson.includes("NormalFemale")) {
    evalSprite = NewSprites[pokeId]["Sprites"]["NormalFemale"];
  }

  return (
    <div
      data-tooltip={CapitalizeChar(NewSprites[pokeId]["Name"])}
      className={`EvalChainItem ${className} EvalChainItem__tooltips`}
    >
      <img
        crossOrigin="projectpokemon.org"
        src={googleProxyURL + encodeURIComponent(evalSprite)}
        alt={"Pokemon"}
        className={"EvalChainItem__Sprite"}
        onClick={() => {
          history.push(`/${parseInt(pokeId)}`);
        }}
      />
    </div>
  );
}

export default EvalChainItem;
