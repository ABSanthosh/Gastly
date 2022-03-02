import React from "react";
import PropTypes from "prop-types";
import style from "./PokeSprite.module.scss";

function PokeSprite({ url }) {
  return (
    <img alt={"Pokemon"} className={style.PokeSpriteWrapper} src={url}></img>
  );
}

PokeSprite.propTypes = {
  // bla: PropTypes.string,
};

PokeSprite.defaultProps = {
  // bla: 'test',
};

export default PokeSprite;
