import "./index.scss";

import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Helmet } from "react-helmet-async";
import loadable from "@loadable/component";
const BaseStats = loadable(() =>
  import("../../components/BaseStats/BaseStats")
);
const AbilityBox = loadable(() =>
  import("../../components/AbilityBox/AbilityBox")
);
const SpriteVariation = loadable(() =>
  import("./components/SpriteVariation/SpriteVariation")
);
const EvalChainItem = loadable(() =>
  import("../../components/EvalChainItem/EvalChainItem")
);
const Tabs = loadable(() => import("./components/Tabs/Tabs"));
const Box = loadable(() => import("../../components/Box/Box"));
const Feet = loadable(() => import("../../components/Feet/Feet"));
const Type = loadable(() => import("../../components/Types/Type"));
const Cries = loadable(() => import("../../components/Cries/Cries"));
const HintBox = loadable(() => import("./components/HintBox/HintBox"));
const Backdrop = loadable(() => import("../../components/backdrops/Backdrop"));
const PokeSprite = loadable(() => import("./components/PokeSprite/PokeSprite"));

import { forifier } from "../../Util/forifier";
import { useLoading } from "../../hooks/useLoading";
import { CapitalizeChar } from "../../Util/Capitalize";
import DarkMode from "../../Assets/Images/DarkMode.gif";
import LightMode from "../../Assets/Images/LightMode.gif";
import NewSprites from "../../Assets/JSON/PokemonData.json";
import { InitialConditions } from "../../Util/SpriteConditions";
import { SpriteVariationControlPanel } from "../../Util/SpriteVariationCP";

import { useEmblaCarousel } from "embla-carousel/react";

// import Tabs from "./components/Tabs/Tabs";
// import Box from "../../components/Box/Box";
// import Feet from "../../components/Feet/Feet";
// import Type from "../../components/Types/Type";
// import Cries from "../../components/Cries/Cries";
// import HintBox from "./components/HintBox/HintBox";
// import Backdrop from "../../components/backdrops/Backdrop";
// import PokeSprite from "./components/PokeSprite/PokeSprite";
// import BaseStats from "../../components/BaseStats/BaseStats";
// import AbilityBox from "../../components/AbilityBox/AbilityBox";
// import EvalChainItem from "../../components/EvalChainItem/EvalChainItem";
// import SpriteVariation from "./components/SpriteVariation/SpriteVariation";

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
  if (isNaN(id)) {
    //TODO: Make a 404 site and redirect there
    history.push(`/${Math.floor(Math.random() * 898 + 1)}`);
  }

  const imgRef = useRef();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [backdropcolor, setColor] = useState("white");
  const [text, setText] = useState("");
  const [pokename, setPokename] = useState("");
  const [desc, setDescription] = useState("");
  const [Url, setUrl] = useState();
  const [galleryUrl, setGalleryUrl] = useState(0);
  const [evalChain, setEvalChain] = useState([]);
  const [galleryImages, setGalleyImages] = useState([]);
  const [iconFocus, seticonFocus] = useState([
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus disabled",
    "OffFocus",
  ]);
  const [stats, setStats] = useState([0, 0, 0, 0, 0, 0]);
  const [poketypes, setPoketypes] = useState();
  const [pokeabilities, setPokeabilities] = useState();
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("Theme")) == null
      ? "LightMode"
      : JSON.parse(localStorage.getItem("Theme"))
  );

  let poketype, pokeability, evalChainComponent, galleryItems;

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("scroll", () => {
        if (galleryUrl != emblaApi.selectedScrollSnap()) {
          setGalleryUrl(emblaApi.selectedScrollSnap());
        }
        if (!emblaApi.canScrollPrev()) {
          setGalleryUrl(0);
        }
      });
    }
  }, [emblaApi]);

  // useEffect(() => {
  //   console.log(galleryUrl);
  // }, [galleryUrl]);

  useEffect(() => {
    let pokemonDetails = NewSprites[forifier(id)];
    poketype = [];
    pokeability = [];
    evalChainComponent = [];
    galleryItems = [];

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

    NewSprites[forifier(id)]["Sprites"]["Misc"].forEach((obj, index) => {
      galleryItems.push(
        <div key={index + 1} className="embla__slide">
          <img className="galleryItems" src={obj} />
        </div>
      );
    });

    setPokename(pokemonDetails["Name"]);
    setPoketypes(poketype);
    setPokeabilities(pokeability);
    setDescription(pokemonDetails["Description"]);
    setEvalChain(evalChainComponent);
    setGalleyImages(galleryItems);
    // setGalleryUrl(galleryItems[0]);

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
      <Helmet
        meta={[
          { name: "description", content: `${desc.substring(0, 350)}...` },
        ]}
        title={`Gastly | ${CapitalizeChar(pokename)} (${id})`}
      />
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
                alt={theme}
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
            <div className="row__forward row__forward--gallery">
              <div className="row__forward--gallerySubcontainer">
                <Box
                  className="idkWhat"
                  style={{ width: "110px", height: "110px" }}
                ></Box>
                <Box
                  className="idkWhat"
                  style={{ width: "110px", height: "110px" }}
                ></Box>
              </div>
              <Box className="PokeGalleryHeading">
                <span>Miscellaneous Image Gallery</span>
                <div className="gallerySelector ">
                  <div className="gallerySelector__image embla__container">
                    <span className="gallerySelector__counter">
                      {galleryUrl + 1}/{galleryImages.length}
                    </span>

                    <div className="embla" ref={emblaRef}>
                      <div className="embla__container">{galleryImages}</div>
                    </div>
                  </div>
                  <div className="gallerySelector__dotsContainer">
                    <div
                      className="leftChevron"
                      onClick={() => {
                        emblaApi.scrollPrev();
                      }}
                    />

                    <div
                      className="rightChevron"
                      onClick={() => {
                        emblaApi.scrollNext();
                      }}
                    />
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
