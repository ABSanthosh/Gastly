import "./PokeSprite.scss";

import ColorThief from "../../../../../node_modules/colorthief";
import { rgbToHex } from "../../../../Util/rgbToHex";
import { useImgLoading } from "../../../../hooks/useImgLoading";
import { useLoading } from "../../../../hooks/useLoading";

function PokeSprite({ imgRef, Url, setColor }) {
  let googleProxyURL =
    "https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=";

  const { stopLoading } = useLoading();
  const { stopImgLoading } = useImgLoading();

  return (
    <>
      <link rel="preload" as="image" href={Url} />
      <img
        crossOrigin="projectpokemon.org"
        ref={imgRef}
        src={Url}
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
          try {
            stopImgLoading();
          } catch (ee) {}
        }}
      />
    </>
  );
}

export default PokeSprite;
