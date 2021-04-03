import "./index.scss";

import { getData, getDesc } from "../../Util/pokeapi";
import { suggestions, suggestionsWithJustNames } from "../../Util/suggestions";
import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Backdrop from "../../components/backdrops/Backdrop";
import Box from "../../components/iBoxes/iBox";
import { Hint } from "react-autocomplete-hint";
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
    getData(id).then((data) => {
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
    });

    getDesc(id).then((data) => {
      setDescription(data["data"]["description"]);
    });
    // startLoading();
  }, [id]);

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
