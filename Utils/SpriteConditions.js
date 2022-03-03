import { forifier } from "../Utils/forifier";

let DefaultFocus = [
  "OffFocus disabled",
  "OffFocus disabled",
  "OffFocus disabled",
  "OffFocus disabled",
];

function setDefaultFocus(focuslist) {
  DefaultFocus = focuslist;
}

export function InitialConditions(
  setUrl,
  setIconFocus,
  NewSprites
) {
  setDefaultFocus([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
  ]);

  let SpriteJson = Object.keys(NewSprites["Sprites"]);
  // console.log(NewSprites["Name"] + ":" + SpriteJson);

  if (
    SpriteJson.includes("NoGenNormal") ||
    SpriteJson.includes("NoGenShiny") ||
    SpriteJson.includes("UnknownNormal") ||
    SpriteJson.includes("UnknownShiny")
  ) {
    // console.log("1");
    if (SpriteJson.includes("GigaShiny") || SpriteJson.includes("GigaNormal")) {
      // console.log("1.1");
      setDefaultFocus([
        "OffFocus",
        DefaultFocus[1],
        DefaultFocus[2],
        "OffFocus",
      ]);
      if (
        SpriteJson.includes("NormalFemale") ||
        SpriteJson.includes("ShinyFemale") ||
        SpriteJson.includes("NormalMale") ||
        SpriteJson.includes("ShinyMale")
      ) {
        // console.log("1.2");
        if (
          SpriteJson.includes("NormalFemale") &&
          SpriteJson.includes("ShinyFemale") &&
          SpriteJson.includes("NormalMale") &&
          SpriteJson.includes("ShinyMale")
        ) {
          // console.log("1.2.1");
          setDefaultFocus([
            "OffFocus",
            "OffFocus",
            "OffFocus",
            DefaultFocus[3],
          ]);
        }
      }
    } else if (
      SpriteJson.includes("NormalFemale") ||
      SpriteJson.includes("ShinyFemale") ||
      SpriteJson.includes("NormalMale") ||
      SpriteJson.includes("ShinyMale")
    ) {
      // console.log("1.2");
      if (
        SpriteJson.includes("NormalFemale") &&
        SpriteJson.includes("ShinyFemale") &&
        SpriteJson.includes("NormalMale") &&
        SpriteJson.includes("ShinyMale")
      ) {
        // console.log("1.2.1");
        setDefaultFocus(["OffFocus", "OffFocus", "OffFocus", DefaultFocus[3]]);
      }
    } else if (
      SpriteJson.includes("MaleOnlyNormal") ||
      SpriteJson.includes("MaleOnlyShiny") ||
      SpriteJson.includes("FemaleOnlyNormal") ||
      SpriteJson.includes("FemaleOnlyShiny")
    ) {
      // console.log("1.3");
      if (
        SpriteJson.includes("MaleOnlyNormal") &&
        SpriteJson.includes("MaleOnlyShiny")
      ) {
        // console.log("1.3.1");
        setDefaultFocus([
          "OffFocus",
          "OffFocus",
          DefaultFocus[2],
          DefaultFocus[3],
        ]);
      }
      if (
        SpriteJson.includes("FemaleOnlyNormal") &&
        SpriteJson.includes("FemaleOnlyShiny")
      ) {
        // console.log("1.3.1");
        setDefaultFocus([
          "OffFocus",
          DefaultFocus[1],
          "OffFocus",
          DefaultFocus[3],
        ]);
      }
    } else {
      // console.log("1.3");
      setDefaultFocus([
        "OffFocus",
        DefaultFocus[1],
        DefaultFocus[2],
        DefaultFocus[3],
      ]);
    }
  } else if (
    SpriteJson.includes("NormalFemale") ||
    SpriteJson.includes("ShinyFemale") ||
    SpriteJson.includes("NormalMale") ||
    SpriteJson.includes("ShinyMale")
  ) {
    // console.log("2");
    if (
      SpriteJson.includes("NormalFemale") &&
      SpriteJson.includes("ShinyFemale") &&
      SpriteJson.includes("NormalMale") &&
      SpriteJson.includes("ShinyMale")
    ) {
      // console.log("2.1");
      setDefaultFocus(["OffFocus", "OffFocus", "OffFocus", DefaultFocus[3]]);
      if (
        SpriteJson.includes("GigaShiny") ||
        SpriteJson.includes("GigaNormal")
      ) {
        // console.log("2.1.1");
        setDefaultFocus(["OffFocus", "OffFocus", "OffFocus", "OffFocus"]);
      }
    } else if (
      SpriteJson.includes("NormalFemale") &&
      SpriteJson.includes("ShinyFemale")
    ) {
      // console.log("2+")
      setDefaultFocus([
        "OffFocus",
        DefaultFocus[1],
        "OnFocus",
        DefaultFocus[3],
      ]);
    }
  } else if (
    SpriteJson.includes("MaleOnlyNormal") ||
    SpriteJson.includes("MaleOnlyShiny") ||
    SpriteJson.includes("FemaleOnlyNormal") ||
    SpriteJson.includes("FemaleOnlyShiny")
  ) {
    // console.log("3");
    if (
      SpriteJson.includes("MaleOnlyNormal") &&
      SpriteJson.includes("MaleOnlyShiny")
    ) {
      // console.log("3.1");
      setDefaultFocus([
        "OffFocus",
        "OffFocus",
        DefaultFocus[2],
        DefaultFocus[3],
      ]);
    }
    if (
      SpriteJson.includes("FemaleOnlyNormal") &&
      SpriteJson.includes("FemaleOnlyShiny")
    ) {
      // console.log("3.2");
      setDefaultFocus([
        "OffFocus",
        DefaultFocus[1],
        "OffFocus",
        DefaultFocus[3],
      ]);
    }
  } else {
    // console.log("Final resort");
  }
  // ================================================================================================== //

  if (SpriteJson.includes("NoGenNormal")) {
    setUrl(NewSprites["Sprites"]["NoGenNormal"]);
    // console.log("1");
    setDefaultFocus([
      DefaultFocus[0],
      DefaultFocus[1],
      DefaultFocus[2],
      DefaultFocus[3],
    ]);
  } else if (SpriteJson.includes("UnknownNormal")) {
    setUrl(NewSprites["Sprites"]["UnknownNormal"]);
    // console.log("2");
    setDefaultFocus([
      DefaultFocus[0],
      DefaultFocus[1],
      DefaultFocus[2],
      DefaultFocus[3],
    ]);
  } else if (SpriteJson.includes("MaleOnlyNormal")) {
    setUrl(NewSprites["Sprites"]["MaleOnlyNormal"]);
    // console.log("3");
    setDefaultFocus([
      DefaultFocus[0],
      "OnFocus",
      DefaultFocus[2],
      DefaultFocus[3],
    ]);
  } else if (SpriteJson.includes("FemaleOnlyNormal")) {
    setUrl(NewSprites["Sprites"]["FemaleOnlyNormal"]);
    // console.log("4");
    setDefaultFocus([
      DefaultFocus[0],
      DefaultFocus[1],
      "OnFocus",
      DefaultFocus[3],
    ]);
  } else if (SpriteJson.includes("NormalMale")) {
    setUrl(NewSprites["Sprites"]["NormalMale"]);
    // console.log("5");
    setDefaultFocus([
      DefaultFocus[0],
      "OnFocus",
      DefaultFocus[2],
      DefaultFocus[3],
    ]);
  }

  // console.log(iconFocus);
  setIconFocus(DefaultFocus);
}
