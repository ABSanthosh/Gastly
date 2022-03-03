import React from "react";
import PropTypes from "prop-types";
import boxStyle from "./Box.module.scss";

function Box({ children, className, style }) {
  return (
    <div className={`${boxStyle.BoxWrapper} ${className}`} style={style}>
      {children}
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Box.defaultProps = {
  className: "",
  children: null, 
};

export default Box;
