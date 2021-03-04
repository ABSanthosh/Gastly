import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import ColorThief from "../../../node_modules/colorthief";
import Sprites from "../../Assets/sprites.json";
import "./Homeindex.scss";

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
  if (id > 898) {
    history.push("/898");
    id = 898;
  }
  const colorThief = new ColorThief();

  let Url = Sprites[forifier(id)][0];

  let googleProxyURL =
    "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

  const img = new Image();
  const img2 = new Image();
  img.crossOrigin = "Anonymous";
  img.src = googleProxyURL + encodeURIComponent(Url);
  img2.crossOrigin = "Anonymous";
  img2.src = googleProxyURL + encodeURIComponent(Url);
  // img.src = (Url);
  try {
    let color = rgbToHex(
      colorThief.getColor(img2)[0],
      colorThief.getColor(img2)[1],
      colorThief.getColor(img2)[2]
    );
    setColor(color);
  } catch (err) {
    img.addEventListener("load", function () {
      let color = rgbToHex(
        colorThief.getColor(img)[0],
        colorThief.getColor(img)[1],
        colorThief.getColor(img)[2]
      );
      setColor(color);
    });
  }

  const [backdropcolor, setColor] = useState("white");
  const ImgElement = () => {
    return <img className="content__Sprite" src={Url} />;
  };

  return (
    <div className="Maincontainer">
      <link
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?v=2214135"
        rel="stylesheet"
      />
      <div className="Maincontainer__contentwrapper">
        <div className="Maincontainer__backdrop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="0.5"
              fill={backdropcolor}
              d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,74.7C672,107,768,181,864,202.7C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              fill={backdropcolor}
              d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,96C672,128,768,224,864,229.3C960,235,1056,149,1152,101.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="Maincontainer__content">
          <div className="content__details">
            <div className="fa fa-caret-left" />
            {ImgElement()}
            <div className="fa fa-caret-right" />
          </div>
          <div className="content__image"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;