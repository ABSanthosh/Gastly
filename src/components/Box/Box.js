import "./Box.scss";

import PropTypes from "prop-types";

function Box({ children, style, className, onClick,ref }) {
  return (
    <div style={style} onClick={onClick} className={`Box ${className}`}>
      {children}
    </div>
  );
}

Box.defaultProps = {
  children: null,
  className: "",
  onClick: () => {},
};

Box.propTypes = {
  children: PropTypes.node,
};
export default Box;
