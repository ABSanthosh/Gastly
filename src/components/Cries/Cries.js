import "./Cries.scss";
import Play from "../../Assets/Images/play.png";
import Pause from "../../Assets/Images/pause.png";
import { forifier } from "../../Util/forifier";

function Cries({ pokeId }) {
  return (
    <>
      <link
        rel="preload"
        as="audio"
        href={`https://gastly-dex.github.io/PokedexData/PokemonCries/${forifier(
          pokeId
        )}.mp3`}
      />
      <audio
        id="PokemonCry"
        src={`https://gastly-dex.github.io/PokedexData/PokemonCries/${forifier(
          pokeId
        )}.mp3`}
        onError={() => {
          document.getElementById("audioBoxImg").style.opacity = 0.5;
          document.getElementById("audioBoxImg").style.cursor = "unset";
        }}
        onLoad={() => {
          document.getElementById("audioBoxImg").style.opacity = 1;
          document.getElementById("audioBoxImg").style.cursor = "pointer";
        }}
      />
      <img
        tabIndex={0}
        className="audioBoxImg"
        id="audioBoxImg"
        alt="Pokemon cry play button"
        onFocus={() => {
          document.onkeyup = (e) => {
            if (e.key == "Enter") {
              const audioElement = document.getElementById("PokemonCry");
              if (
                document.getElementById("audioBoxImg").src == Play &&
                document.getElementById("audioBoxImg").style.opacity != 0.5
              ) {
                document.getElementById("audioBoxImg").src = Pause;
                audioElement.play();
                setTimeout(() => {
                  document.getElementById("audioBoxImg").src = Play;
                }, audioElement.duration * 1000 - audioElement.currentTime * 1000);
              } else {
                document.getElementById("audioBoxImg").src = Play;
                audioElement.pause();
              }
            }
          };
        }}
        onClick={() => {
          const audioElement = document.getElementById("PokemonCry");
          if (
            document.getElementById("audioBoxImg").src == Play &&
            document.getElementById("audioBoxImg").style.opacity != 0.5
          ) {
            document.getElementById("audioBoxImg").src = Pause;
            audioElement.play();
            setTimeout(() => {
              document.getElementById("audioBoxImg").src = Play;
            }, audioElement.duration * 1000 - audioElement.currentTime * 1000);
          } else {
            document.getElementById("audioBoxImg").src = Play;
            audioElement.pause();
          }
        }}
        src={Play}
      />
    </>
  );
}

export default Cries;
