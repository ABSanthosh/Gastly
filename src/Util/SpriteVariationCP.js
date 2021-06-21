import NewSprites from "../Assets/JSON/PokemonData.json";
import { forifier } from "./forifier";

export function SpriteVariationControlPanel(iconFocus, id, setUrl) {
  if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OnFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("MaleOnlyShiny" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["MaleOnlyShiny"]);
    } else if ("ShinyMale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["ShinyMale"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OnFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("MaleOnlyNormal" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["MaleOnlyNormal"]);
    } else if ("NormalMale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["NormalMale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("FemaleOnlyShiny" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["FemaleOnlyShiny"]);
    } else if ("ShinyFemale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["ShinyFemale"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("FemaleOnlyNormal" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["FemaleOnlyNormal"]);
    } else if ("NormalFemale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["NormalFemale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NoGenShiny" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["NoGenShiny"]);
    } else if ("UnknownShiny" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["UnknownShiny"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NoGenNormal" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["NoGenNormal"]);
    } else if ("UnknownNormal" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["UnknownNormal"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OnFocus")
  ) {
    if ("GigaNormal" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["GigaNormal"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OnFocus")
  ) {
    if ("GigaShiny" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["GigaShiny"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NormalFemale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["NormalFemale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("ShinyFemale" in NewSprites[forifier(id)]["Sprites"]) {
      setUrl(NewSprites[forifier(id)]["Sprites"]["ShinyFemale"]);
    }
  }
}
