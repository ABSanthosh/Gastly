import style from "./Cries.module.scss";
import Play from "../../Assets/Images/play.png";
import Pause from "../../Assets/Images/pause.png";

function Cries({ pokeId }) {
  return (
    <button
      tabIndex={0}
      className={style.audioBoxImg}
      data-tooltip="Pokemon Cry"
      onClick={() => {
        console.log("click");
        const audioElement = document.getElementById("PokemonCry");
        if (
          document.getElementById("audioBoxImg").src.includes(Play.src) &&
          document.getElementById("audioBoxImg").style.opacity != 0.5
        ) {
          document.getElementById("audioBoxImg").src = Pause.src;
          audioElement.play();
          setTimeout(() => {
            document.getElementById("audioBoxImg").src = Play.src;
          }, audioElement.duration * 1000 - audioElement.currentTime * 1000);
        } else {
          document.getElementById("audioBoxImg").src = Play.src;
          audioElement.pause();
        }
      }}
    >
      <link
        rel="prefetch"
        as="audio"
        href={`https://absanthosh.github.io/PokedexData/PokemonCries/${pokeId}.mp3`}
        crossOrigin="anonymous"
      />
      <audio
        id="PokemonCry"
        src={`https://absanthosh.github.io/PokedexData/PokemonCries/${pokeId}.mp3`}
        onError={() => {
          document.getElementById("audioBoxImg").style.opacity = 0.5;
          document.getElementById("audioBoxImg").style.cursor = "unset";
        }}
        onLoad={() => {
          document.getElementById("audioBoxImg").style.opacity = 1;
          document.getElementById("audioBoxImg").style.cursor = "pointer";
        }}
      />

      <img id="audioBoxImg" alt="Pokemon cry play button" src={Play.src} />
    </button>
  );
}

export default Cries;
