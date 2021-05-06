import "./Box.scss";

import { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";

function Box({ children }) {
  return (
    <div className="Box">
      {children}
    </div>
  );
}

Box.defaultProps = {
  children: null,
};

Box.propTypes = {
  children: PropTypes.node,
};
export default Box;
