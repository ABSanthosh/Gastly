import "./index.scss";

import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import Box from "../../components/iBoxes/iBox";
import HintBox from "./components/HintBox/HintBox";
import { InitialConditions } from "../../Util/SpriteConditions";
import NewSprites from "../../Assets/FromOldJson.json";
import PokeSprite from "./components/PokeSprite/PokeSprite";
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
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);
  const [poketypes, setPoketypes] = useState();
  const [pokeabilities, setPokeabilities] = useState();
  let poketype, pokeability;

  useEffect(() => {
    let pokemonDetails = NewSprites[forifier(id)];
    poketype = [];
    pokeability = [];

    pokemonDetails["Types"].forEach((obj, index) => {
      poketype.push(<Type key={index} type={obj} />);
    });
    pokemonDetails["Ability"].forEach((obj, index) => {
      pokeability.push(<p key={index}>{obj}</p>);
      pokeability.push(
        <p key={index + 500}>
          <b>&#183;</b>
        </p>
      );
    });
    pokeability.pop();

    setPokename(pokemonDetails["Name"]);
    setPoketypes(poketype);
    setPokeabilities(pokeability);
    setDescription(pokemonDetails["Description"]);

    InitialConditions(id, setUrl, seticonFocus, iconFocus);
  }, [id]);

  useEffect(() => {
    let SpriteJson = Object.keys(NewSprites[forifier(id)]["Sprites"]);
    console.log(iconFocus);
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
              <Box Height="100px" className="content__desc">
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
                          console.log("Fallen in 1");
                          seticonFocus([
                            iconFocus[0],
                            "OnFocus",
                            iconFocus[2],
                            iconFocus[3],
                          ]);
                          if (!iconFocus[3].includes("disabled")) {
                            if (
                              // If Giga is active and Pokemon has _mf_ variation
                              // turn off giga when Male variation is active
                              iconFocus[3].includes("OnFocus") &&
                              NewSprites[forifier(id)]["Sprites"][
                                "GigaNormal"
                              ].includes("_mf_")
                            ) {
                              seticonFocus([
                                iconFocus[0],
                                "OnFocus",
                                iconFocus[2],
                                "OffFocus",
                              ]);
                            } else {
                              seticonFocus([
                                iconFocus[0],
                                "OnFocus",
                                iconFocus[2],
                                "OffFocus",
                              ]);
                            }
                          }
                          if (iconFocus[2].includes("OnFocus")) {
                            seticonFocus([
                              iconFocus[0],
                              "OnFocus",
                              "OffFocus",
                              iconFocus[3],
                            ]);
                          }
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
                          if (!iconFocus[3].includes("disabled")) {
                            if (
                              iconFocus[3].includes("OnFocus") &&
                              NewSprites[forifier(id)]["Sprites"][
                                "GigaNormal"
                              ].includes("_mf_")
                            ) {
                              seticonFocus([
                                iconFocus[0],
                                iconFocus[1],
                                "OnFocus",
                                "OffFocus",
                              ]);
                            } else {
                              seticonFocus([
                                iconFocus[0],
                                iconFocus[1],
                                "OnFocus",
                                iconFocus[3],
                              ]);
                            }
                          }
                        } else {
                          seticonFocus([
                            iconFocus[0],
                            iconFocus[1],
                            "OffFocus",
                            iconFocus[3],
                          ]);
                        }
                        if (iconFocus[1].includes("OnFocus")) {
                          seticonFocus([
                            iconFocus[0],
                            "OffFocus",
                            "OnFocus",
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
                          // If Male variation is active and giga is NoGen, Remove avtive state of male
                          if (
                            iconFocus[1].includes("OnFocus") &&
                            NewSprites[forifier(id)]["Sprites"][
                              "GigaNormal"
                            ].includes("_mf_")
                          ) {
                            seticonFocus([
                              iconFocus[0],
                              "OffFocus",
                              iconFocus[2],
                              "OnFocus",
                            ]);
                          } else if (
                            iconFocus[2].includes("OnFocus") &&
                            NewSprites[forifier(id)]["Sprites"][
                              "GigaNormal"
                            ].includes("_mf_")
                          ) {
                            seticonFocus([
                              iconFocus[0],
                              iconFocus[1],
                              "OffFocus",
                              "OnFocus",
                            ]);
                          } else {
                            seticonFocus([
                              iconFocus[0],
                              iconFocus[1],
                              iconFocus[2],
                              "OnFocus",
                            ]);
                          }
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
