import "./index.scss";

import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import SpriteVariation from "./components/SpriteVariation/SpriteVariation";
import Box from "../../components/iBoxes/iBox";
import HintBox from "./components/HintBox/HintBox";
import { InitialConditions } from "../../Util/SpriteConditions";
import NewSprites from "../../Assets/FromOldJson.json";
import PokeSprite from "./components/PokeSprite/PokeSprite";
import Type from "../../components/Types/Type";
import { forifier } from "../../Util/forifier";
import { useLoading } from "../../hooks/useLoading";
import { useImgLoading } from "../../hooks/useImgLoading";

import ImgLoading from "../../components/ImageLoading/ImageLoading";

function Home() {
  let { id } = useParams();

  let history = useHistory();
  const { startLoading, stopLoading } = useLoading();
  const { startImgLoading } = useImgLoading();

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
    // startImgLoading()
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
          <Backdrop isMobile={false} fill={backdropcolor} />
        </div>
        <div className="Maincontainer__content">
          <div className="content__image">
            <Backdrop isMobile={true} fill={backdropcolor} />
            <div
              className="leftChevron"
              onClick={() => {
                history.push("/" + String(parseInt(id) - 1));
                startLoading();
              }}
            />
            <PokeSprite
              imgRef={imgRef}
              Url={Url}
              setColor={setColor}
              NewSprites={NewSprites}
              forifier={forifier}
              id={id}
            />
            {/* <ImgLoading/> */}
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
                  <SpriteVariation
                    iconFocus={iconFocus}
                    seticonFocus={seticonFocus}
                    id={id}
                  />
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
