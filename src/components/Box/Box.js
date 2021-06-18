import "./Box.scss";

import { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function Box({ children, style, className }) {
  return (
    <div style={style} className={`Box ${className}`}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  children: null,
  className: ""
};

Box.propTypes = {
  children: PropTypes.node,
};
export default Box;
