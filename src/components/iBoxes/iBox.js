import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import "./iBox.scss";

function Box({
  heading,
  minHeight,
  maxHeight,
  Height,
  Width,
  style,
  children,
}) {
  const [more, setMore] = useState(true);
  const [height, setheight] = useState("");
  const node = useRef();
  const inputRef = useRef(null);

  useEffect(() => {
    const elemheight = inputRef.current.offsetHeight;
    setheight(String(parseInt(elemheight) + (heading != "" ? 20 : 0)) + "px");
  }, [inputRef]);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setMore(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  let containerStyle = heading == "" ? { padding: "20px" } : {};
  containerStyle["height"] = more ? Height : height;
  containerStyle["width"] = Width;
  containerStyle["minHeight"] = minHeight;
  // containerStyle["maxHeight"] = maxHeight;
  try {
    Object.keys(style).forEach((key) => (containerStyle[key] = style[key]));
  } catch (e) {}
  return (
    <div ref={node} style={containerStyle} className={"iBox--container"}>
      <p
        className="iBox--heading"
        style={heading != "" ? { "margin-bottom": "10px" } : {}}
      >
        {heading}
      </p>
      <div className="iBox--contentwrapper" ref={inputRef}>
        {children}
      </div>
      {parseInt(height) > parseInt(Height) && more ? (
        <span
          className="shade"
          onClick={() => {
            setMore(more ? false : true);
          }}
        />
      ) : (
        ""
      )}
    </div>
  );
}

Box.defaultProps = {
  children: null,
  heading: "",
  Height: "",
  Width: "",
  minHeight:"",
  maxHeight:""
};

Box.propTypes = {
  heading: PropTypes.string,
  Height: PropTypes.string,
  Width: PropTypes.string,
  children: PropTypes.node,
};
export default Box;
