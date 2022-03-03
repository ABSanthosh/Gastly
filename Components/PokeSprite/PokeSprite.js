import React from "react";
import PropTypes from "prop-types";
import style from "./PokeSprite.module.scss";
import ColorThief from "colorthief";
import { useRef } from "react";
import { rgbToHex } from "../../Utils/rgbToHex";

function PokeSprite({ url, setBackdropColor }) {
  const imgRef = useRef();
  return (
    <>
      <link rel="prefetch" as="image" href={url} crossOrigin="anonymous" />

      <img
        alt={"Pokemon"}
        ref={imgRef}
        crossOrigin="projectpokemon.org"
        onLoad={() => {
          const colorThief = new ColorThief();
          const img = imgRef.current;
          setBackdropColor(
            rgbToHex(
              colorThief.getColor(img)[0],
              colorThief.getColor(img)[1],
              colorThief.getColor(img)[2]
            )
          );
        }}
        className={style.PokeSpriteWrapper}
        src={url}
      />
    </>
  );
}

PokeSprite.propTypes = {
  // bla: PropTypes.string,
};

PokeSprite.defaultProps = {
  // bla: 'test',
};

export default PokeSprite;
