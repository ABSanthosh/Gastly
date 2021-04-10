import "./index.scss";

import { getData, getDesc } from "../../Util/pokeapi";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import Box from "../../components/iBoxes/iBox";
import HintBox from "./components/HintBox/HintBox";
import NewSprites from "../../Assets/FromOldJson.json";
import PokeSprite from "./components/PokeSprite/PokeSprite";
import Sprites from "../../Assets/sprites.json";
import Type from "../../components/Types/Type";
import { forifier } from "../../Util/forifier";
import { useLoading } from "../../hooks/useLoading";

function Home() {
  let { id } = useParams();

  let history = useHistory();
  const { startLoading, stopLoading } = useLoading();

  if (id > 898) {
    history.push("/1");
    id = 1;
    try {
      stopLoading();
    } catch (e) {}
  }
  if (id < 1) {
    history.push("/898");
    id = 898;
    try {
      stopLoading();
    } catch (e) {}
  }

  const imgRef = useRef();
  const [backdropcolor, setColor] = useState("white");
  const [text, setText] = useState("");
  const [pokename, setPokename] = useState("");
  const [desc, setDescription] = useState("");
  const [Url, setUrl] = useState();
  const [iconFocus, seticonFocus] = useState([
    "OffFocus",
    "OffFocus",
    "OffFocus",
    "OffFocus",
  ]);
  const [poketypes, setPoketypes] = useState();
  const [pokeabilities, setPokeabilities] = useState();
  let poketype, pokeability;


// NormalMale
// ShinyMale

// NormalFemale
// ShinyFemale

// GigaNormal
// GigaShiny

// NoGenNormal
// NoGenShiny

// MaleOnlyNormal
// MaleOnlyShiny

// FemaleOnlyNormal
// FemaleOnlyShiny

// UnknownNormal
// UnknownShiny


  useEffect(() => {
    poketype = [];
    pokeability = [];
    getData(id)
      .then((data) => {
        setPokename(data["data"]["name"]);
        data["data"]["types"].forEach((obj, index) => {
          poketype.push(<Type key={index} type={obj["type"]["name"]} />);
        });
        data["data"]["abilities"].forEach((obj, index) => {
          pokeability.push(<p key={index}>{obj["ability"]["name"]}</p>);
          pokeability.push(
            <p key={index + data["data"]["abilities"].length}>
              <b>&#183;</b>
            </p>
          );
        });
        pokeability.pop();
        setPokeabilities(pokeability);
        setPoketypes(poketype);
        getDesc(id).then((data) => {
          setDescription(data["data"]["description"]);
        });
      })
      .catch((error) => {
        getDesc(id).then((data) => {
          setPokename(data["data"]["name"]["english"]);
          setDescription(data["data"]["description"]);
          data["data"]["type"].forEach((obj, index) => {
            poketype.push(<Type key={index} type={obj.toLowerCase()} />);
          });
          data["data"]["profile"]["ability"].forEach((obj, index) => {
            pokeability.push(<p key={index}>{obj[0]}</p>);
            pokeability.push(
              <p key={index + data["data"]["profile"]["ability"].length}>
                <b>&#183;</b>
              </p>
            );
          });
          pokeability.pop();
          setPokeabilities(pokeability);
          setPoketypes(poketype);
        });
      });

    // setUrl(Sprites[forifier(id)]["Sprites"][0]);
    setUrl(
      NewSprites[forifier(id)]["Sprites"][
        Object.keys(NewSprites[forifier(id)]["Sprites"])[1]
      ]
    );

    // Make it a new function in seperate Util file
    // TODO: Reloading removes the "disabled" status from variation symbols because of the "[id]" in use effect

    let SpriteJson = Object.keys(NewSprites[forifier(id)]["Sprites"]);
    
    if (
      (SpriteJson.includes("NoGenNormal") ||
        SpriteJson.includes("NoGenShiny") ||
        SpriteJson.includes("UnknownNormal") ||
        SpriteJson.includes("UnknownShiny")) &&
      SpriteJson.length === 3
    ) {
      seticonFocus([
        "OffFocus",
        "OffFocus disabled",
        "OffFocus disabled",
        "OffFocus disabled",
      ]);
    } else if (
      SpriteJson.includes("GigaShiny") === false ||
      SpriteJson.includes("GigaNormal") === false
    ) {
      seticonFocus([
        iconFocus[0],
        iconFocus[1],
        iconFocus[2],
        "OffFocus disabled",
      ]);
    }
  }, [id]);

  useEffect(() => {
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
      }else if ("UnknownShiny" in NewSprites[forifier(id)]["Sprites"]) {
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
      }else if ("UnknownNormal" in NewSprites[forifier(id)]["Sprites"]) {
        setUrl(NewSprites[forifier(id)]["Sprites"]["UnknownNormal"]);
      }
    }else if (
      iconFocus[0].includes("OffFocus") &&
      iconFocus[1].includes("OffFocus") &&
      iconFocus[2].includes("OffFocus") &&
      iconFocus[3].includes("OnFocus")
    ) {
      if ("GigaNormal" in NewSprites[forifier(id)]["Sprites"]) {
        setUrl(NewSprites[forifier(id)]["Sprites"]["GigaNormal"]);
      }
    }else if (
      iconFocus[0].includes("OnFocus") &&
      iconFocus[1].includes("OffFocus") &&
      iconFocus[2].includes("OffFocus") &&
      iconFocus[3].includes("OnFocus")
    ) {
      if ("GigaShiny" in NewSprites[forifier(id)]["Sprites"]) {
        setUrl(NewSprites[forifier(id)]["Sprites"]["GigaShiny"]);
      }
    }
  }, [iconFocus]);

  return (
    <div className="Maincontainer">
      <div className="Maincontainer__contentwrapper">
        <div className="Maincontainer__backdrop">
          <Backdrop fill={backdropcolor} />
        </div>
        <div className="Maincontainer__content">
          <div className="content__image">
            <div
              className="leftChevron"
              onClick={() => {
                history.push("/" + String(parseInt(id) - 1));
                startLoading();
              }}
            />
            <PokeSprite imgRef={imgRef} Url={Url} setColor={setColor} />
            <div
              className="rightChevron"
              onClick={() => {
                history.push("/" + String(parseInt(id) + 1));
                startLoading();
              }}
            />
          </div>
          <div className="content__details">
            <div className="content__SearchBarBox">
              <span className="fa fa-search" />
              <div className="content__pokemonName">{pokename}</div>
              <HintBox text={text} setText={setText} />
            </div>
            <div className="content__contentwrapper">
              <Box maxHeight="100px" className="content__desc">
                <p>{desc}</p>
              </Box>
              <div className="content__row">
                <Box Width="100%" padding="13px 0px">
                  {poketypes}
                </Box>
                <Box Width="100%" padding="13px 0px">
                  <span
                    className={`fa fa-star fa-star__${iconFocus[0]}`}
                    aria-hidden="true"
                    onClick={() => {
                      // startLoading();
                      if (!iconFocus[0].includes("disabled")) {
                        if (iconFocus[0].includes("OffFocus")) {
                          seticonFocus([
                            "OnFocus",
                            iconFocus[1],
                            iconFocus[2],
                            iconFocus[3],
                          ]);
                        } else {
                          seticonFocus([
                            "OffFocus",
                            iconFocus[1],
                            iconFocus[2],
                            iconFocus[3],
                          ]);
                        }
                      }
                    }}
                  />
                  <span
                    className={`fa fa-mars fa-mars__${iconFocus[1]}`}
                    aria-hidden="true"
                    onClick={() => {
                      // startLoading();
                      if (!iconFocus[1].includes("disabled")) {
                        if (iconFocus[1].includes("OffFocus")) {
                          seticonFocus([
                            iconFocus[0],
                            "OnFocus",
                            iconFocus[2],
                            iconFocus[3],
                          ]);
                        } else {
                          seticonFocus([
                            iconFocus[0],
                            "OffFocus",
                            iconFocus[2],
                            iconFocus[3],
                          ]);
                        }
                      }
                    }}
                  />
                  <span
                    className={`fa fa-venus fa-venus__${iconFocus[2]}`}
                    aria-hidden="true"
                    onClick={() => {
                      // startLoading();
                      if (!iconFocus[2].includes("disabled")) {
                        if (iconFocus[2].includes("OffFocus")) {
                          seticonFocus([
                            iconFocus[0],
                            iconFocus[1],
                            "OnFocus",
                            iconFocus[3],
                          ]);
                        } else {
                          seticonFocus([
                            iconFocus[0],
                            iconFocus[1],
                            "OffFocus",
                            iconFocus[3],
                          ]);
                        }
                      }
                    }}
                  />
                  <span
                    className={`fa fa-g fa-g__${iconFocus[3]}`}
                    aria-hidden="true"
                    onClick={() => {
                      // startLoading();
                      if (!iconFocus[3].includes("disabled")) {
                        if (iconFocus[3].includes("OffFocus")) {
                          seticonFocus([
                            iconFocus[0],
                            iconFocus[1],
                            iconFocus[2],
                            "OnFocus",
                          ]);
                        } else {
                          seticonFocus([
                            iconFocus[0],
                            iconFocus[1],
                            iconFocus[2],
                            "OffFocus",
                          ]);
                        }
                      }
                    }}
                  >
                    G
                  </span>
                </Box>
              </div>
              <Box padding="11.5px" heading="Abilities">
                {pokeabilities}
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
