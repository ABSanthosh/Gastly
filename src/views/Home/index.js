import "./Homeindex.scss";
import "./HomeindexMobile.scss";

import { getDesc, getName } from "../../Util/pokeapi";
import { suggestions, suggestionsWithJustNames } from "../../Util/suggestions";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import Box from "../../components/iBoxes/iBox";
import ColorThief from "../../../node_modules/colorthief";
import { Hint } from "react-autocomplete-hint";
import Sprites from "../../Assets/sprites.json";
import Type from "../../components/Types/Type";
import { useLoading } from "../../hooks/useLoading";

function forifier(pokeId) {
  pokeId = String(pokeId);
  while (pokeId.length < 4) {
    pokeId = "0" + pokeId;
  }
  return pokeId;
}

const rgbToHex = (r, g, b) =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    })
    .join("");

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
  let googleProxyURL =
    "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

  let Url = Sprites[forifier(id)]["Sprites"][0];

  const imgRef = useRef();
  const [backdropcolor, setColor] = useState("white");
  const [text, setText] = useState("");
  const [pokename, setPokename] = useState("");
  const [desc, setDescription] = useState("");
  const [poketypes, setPoketypes] = useState();
  const [pokeabilities, setPokeabilities] = useState();
  let poketype, pokeability;

  useEffect(() => {
    poketype = [];
    pokeability = [];
    getName(id).then((data) => {
      setPokename(data["data"]["name"]);
      data["data"]["types"].forEach((obj, index) => {
        poketype.push(<Type key={index} type={obj["type"]["name"]} />);
      });
      data["data"]["abilities"].forEach((obj, index) => {
        pokeability.push(<p key={index}>{obj["ability"]["name"]}</p>);
        pokeability.push(
          <p key={index}>
            <b>&#183;</b>
          </p>
        );
      });
      pokeability.pop();
      setPokeabilities(pokeability);
      setPoketypes(poketype);
    });

    getDesc(id).then((data) => {
      setDescription(data["data"]["description"]);
    });
  }, [id]);

  return (
    <div className="Maincontainer">
      <link
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?v=2214135"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
        integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
        crossOrigin="anonymous"
      />
      <div className="Maincontainer__contentwrapper">
        <div className="Maincontainer__backdrop">
          <Backdrop fill={backdropcolor} />
        </div>
        <div className="Maincontainer__content">
          <div className="content__details">
            <div
              className="leftChevron"
              onClick={() => {
                history.push("/" + String(parseInt(id) - 1));
                startLoading();
              }}
            />
            <img
              crossOrigin="projectpokemon.org"
              ref={imgRef}
              src={googleProxyURL + encodeURIComponent(Url)}
              alt={"Pokemon"}
              className={"content__Sprite"}
              onLoad={() => {
                const colorThief = new ColorThief();
                const img = imgRef.current;
                setColor(
                  rgbToHex(
                    colorThief.getColor(img)[0],
                    colorThief.getColor(img)[1],
                    colorThief.getColor(img)[2]
                  )
                );
                try {
                  stopLoading();
                  document.querySelector(".content__inputBox").blur();
                } catch (e) {}
              }}
            />
            <div
              className="rightChevron"
              onClick={() => {
                history.push("/" + String(parseInt(id) + 1));
                startLoading();
              }}
            />
          </div>
          <div className="content__image">
            <div className="content__SearchBarBox">
              <span className="fa fa-search"></span>
              <div className="content__pokemonName">{pokename}</div>
              <Hint options={suggestions()} allowTabFill>
                <input
                  className="content__inputBox"
                  id="myText"
                  value={text}
                  type="text"
                  spellCheck="false"
                  autoCapitalize="off"
                  autoCorrect="off"
                  onBlur={() => {
                    if (text != "") {
                      setText("");
                    }
                  }}
                  onChange={(e) => {
                    setText(e.target.value);

                    if (suggestionsWithJustNames().includes(e.target.value)) {
                      console.log(e.target.value);
                      document.getElementById("myText").blur();
                      if (e.target.value.includes("#")) {
                        history.push(
                          "/" + String(parseInt(e.target.value.split(" #")[1]))
                        );
                      } else {
                        history.push(
                          "/" + String(parseInt(e.target.value.split(" ")[0]))
                        );
                      }

                      setText("");
                    }
                  }}
                />
              </Hint>
            </div>
            <div className="content__contentwrapper">
              <Box maxHeight="100px" className="content__desc">
                <p>{desc}</p>
              </Box>
              <div className="content__row">
                <Box Width="100%" padding="13px 0px">
                  {poketypes}
                </Box>
                <Box padding="11.5px" heading="Abilities">
                  {pokeabilities}
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
