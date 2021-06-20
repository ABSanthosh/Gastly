import "./index.scss";

import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import BaseStats from "../../components/BaseStats/BaseStats";
import Box from "../../components/Box/Box";
import HintBox from "./components/HintBox/HintBox";
import { InitialConditions } from "../../Util/SpriteConditions";
import NewSprites from "../../Assets/FromOldJson.json";
import PokeSprite from "./components/PokeSprite/PokeSprite";
import SpriteVariation from "./components/SpriteVariation/SpriteVariation";
import { SpriteVariationControlPanel } from "../../Util/SpriteVariationCP";
import Type from "../../components/Types/Type";
import { forifier } from "../../Util/forifier";
import { useLoading } from "../../hooks/useLoading";
import AbilityBox from "../../components/AbilityBox/AbilityBox";
import EvalChainItem from "../../components/EvalChainItem/EvalChainItem";
import Cries from "../../components/Cries/Cries";
import Feet from "../../components/Feet/Feet";
import Tabs from "./components/Tabs/Tabs";
import DarkMode from "../../Assets/Images/DarkMode.gif";
import LightMode from "../../Assets/Images/LightMode.gif";

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
  if(isNaN(id)){
    //TODO: Make a 404 site and redirect there
    history.push(`/${Math.floor(Math.random() * 898 + 1)}`);
  }

  const imgRef = useRef();
  const [backdropcolor, setColor] = useState("white");
  const [text, setText] = useState("");
  const [pokename, setPokename] = useState("");
  const [desc, setDescription] = useState("");
  const [Url, setUrl] = useState();
  const [evalChain, setEvalChain] = useState([]);
  const [iconFocus, seticonFocus] = useState([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);
  const [stats, setStats] = useState([0, 0, 0, 0, 0, 0]);
  const [poketypes, setPoketypes] = useState();
  const [pokeabilities, setPokeabilities] = useState();
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("Theme")));

  let poketype, pokeability, evalChainComponent;

  useEffect(() => {
    let pokemonDetails = NewSprites[forifier(id)];
    poketype = [];
    pokeability = [];
    evalChainComponent = [];

    try {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    } catch (err) {}

    pokemonDetails["Types"].forEach((obj, index) => {
      poketype.push(<Type key={index} type={obj} />);
    });
    if (poketype.length === 1) {
      poketype.push(<Type key="12031" type="placeholder" />);
    }

    pokemonDetails["Ability"].forEach((obj, index) => {
      pokeability.push(<AbilityBox ability={obj} key={index} />);
    });

    setStats([
      pokemonDetails["Stats"]["HP"],
      pokemonDetails["Stats"]["Attack"],
      pokemonDetails["Stats"]["Defense"],
      pokemonDetails["Stats"]["Sp. Attack"],
      pokemonDetails["Stats"]["Sp. Defense"],
      pokemonDetails["Stats"]["Speed"],
    ]);

    NewSprites[forifier(id)]["EvolutionChain"].forEach((obj, index) => {
      evalChainComponent.push(
        <EvalChainItem pokeId={obj} className={obj} key={index} />
      );
    });
    if (evalChainComponent.length == 0) {
      let obj = id;
      evalChainComponent.push(<EvalChainItem pokeId={obj} className={obj} />);
    }

    setPokename(pokemonDetails["Name"]);
    setPoketypes(poketype);
    setPokeabilities(pokeability);
    setDescription(pokemonDetails["Description"]);
    setEvalChain(evalChainComponent);

    InitialConditions(id, setUrl, seticonFocus, iconFocus);
  }, [id]);

  useEffect(() => {
    SpriteVariationControlPanel(iconFocus, id, setUrl);
  }, [iconFocus]);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={`Maincontainer ${theme}`}>
      <div className="Maincontainer__contentwrapper">
        <div className="content__backdrop">
          <Backdrop isMobile={false} fill={backdropcolor} />
        </div>
        <div className="content__search">
          <div className="content__SearchBarBox">
            <span className="fa fa-search" />
            <div className="content__pokemonName">
              {pokename}
              <img
                className="content__themeToggle"
                onClick={() => {
                  console.log("Hi");
                  theme == "LightMode"
                    ? setTheme("DarkMode")
                    : setTheme("LightMode");
                }}
                src={theme == "LightMode" ? DarkMode : LightMode}
              />
            </div>
            <HintBox text={text} setText={setText} />
          </div>
        </div>
        <div className="content__image">
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
          <div
            className="rightChevron"
            onClick={() => {
              history.push("/" + String(parseInt(id) + 1));
              startLoading();
            }}
          />
        </div>
        <div className="content__details">
          <div className="content__wrapper">
            <Box id="PokeDesc" className="PokeDesc">
              <p id="pokeDescPara">{desc}</p>
            </Box>
            <div className="row__forward">
              <Box className="type2">{poketypes}</Box>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "auto",
                  height: "50px",
                }}
                className="SpriteVariationBox"
              >
                <SpriteVariation
                  iconFocus={iconFocus}
                  seticonFocus={seticonFocus}
                  id={id}
                />
              </Box>
            </div>

            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <BaseStats
                className="HP"
                text={`HP ${stats[0]}`}
                percent={stats[0]}
              />
              <BaseStats
                className="Attack"
                text={`Attack ${stats[1]}`}
                percent={stats[1]}
              />
              <BaseStats
                className="Defense"
                text={`Defense ${stats[2]}`}
                percent={stats[2]}
              />
              <BaseStats
                className="SpAttack"
                text={`Sp. Attack ${stats[3]}`}
                percent={stats[3]}
              />
              <BaseStats
                className="SpDefense"
                text={`Sp. Defense ${stats[4]}`}
                percent={stats[4]}
              />
              <BaseStats
                className="Speed"
                text={`Speed ${stats[5]}`}
                percent={stats[5]}
              />
            </Box>

            <div className="row__forward row__forward--ability">
              <Box className="PokeAbilityHeading">
                <span>Abilities</span>
                <div className="abilityList">
                  {pokeabilities == undefined || pokeabilities.length != 0 ? (
                    pokeabilities
                  ) : (
                    <AbilityBox ability="Not Available" />
                  )}
                </div>
              </Box>
              <div className="row__forward__abilitySubContainer">
                <div className="abilitySubContainer--one">
                  <Box className="cries">
                    <Cries pokeId={id} />
                  </Box>
                  <Box className="footprint">
                    <Feet pokeId={id} />
                  </Box>
                </div>
                <div className="abilitySubContainer--two">
                  <Box className="dimensions">
                    <Tabs id={id} />
                  </Box>
                </div>
              </div>
            </div>

            <Box className="PokeEvalChainHeading">
              <span>Evolution Chain</span>
              <div className="evalList">{evalChain}</div>
            </Box>
            <Box className="PokeResHeading">
              <span>Other Resourses</span>
              <div className="resList">(Yet to be devloped)</div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
