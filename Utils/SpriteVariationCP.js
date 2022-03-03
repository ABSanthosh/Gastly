export function SpriteVariationControlPanel(iconFocus, setUrl, NewSprites) {
  if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OnFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("MaleOnlyShiny" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["MaleOnlyShiny"]);
    } else if ("ShinyMale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["ShinyMale"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OnFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("MaleOnlyNormal" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["MaleOnlyNormal"]);
    } else if ("NormalMale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["NormalMale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("FemaleOnlyShiny" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["FemaleOnlyShiny"]);
    } else if ("ShinyFemale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["ShinyFemale"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("FemaleOnlyNormal" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["FemaleOnlyNormal"]);
    } else if ("NormalFemale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["NormalFemale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NoGenShiny" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["NoGenShiny"]);
    } else if ("UnknownShiny" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["UnknownShiny"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NoGenNormal" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["NoGenNormal"]);
    } else if ("UnknownNormal" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["UnknownNormal"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OnFocus")
  ) {
    if ("GigaNormal" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["GigaNormal"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OffFocus") &&
    iconFocus[3].includes("OnFocus")
  ) {
    if ("GigaShiny" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["GigaShiny"]);
    }
  } else if (
    iconFocus[0].includes("OffFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("NormalFemale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["NormalFemale"]);
    }
  } else if (
    iconFocus[0].includes("OnFocus") &&
    iconFocus[1].includes("OffFocus") &&
    iconFocus[2].includes("OnFocus") &&
    iconFocus[3].includes("OffFocus")
  ) {
    if ("ShinyFemale" in NewSprites["Sprites"]) {
      setUrl(NewSprites["Sprites"]["ShinyFemale"]);
    }
  }
}
