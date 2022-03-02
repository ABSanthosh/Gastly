import style from "./Backdrop.module.scss";

function Backdrop({ fill, isMobile }) {
  let viewBox = isMobile ? "30 0 820 280" : "0 0 1440 320";
  let ClassName = isMobile ? style.MobileBD : style.DesktopBD;
  const MobileStyle = isMobile
    ? {
        height: "80px",
        position: "absolute",
        width: "100%",
        bottom: "0px",
        backgroundColor: fill,
      }
    : {};

  return (
    <div style={MobileStyle} className={style.backdropWrapper}>
      <svg
        className={ClassName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path
          fillOpacity="0.5"
          fill={fill}
          d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,74.7C672,107,768,181,864,202.7C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        className={ClassName}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
      >
        <path
          fillOpacity="1"
          fill={fill}
          d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,96C672,128,768,224,864,229.3C960,235,1056,149,1152,101.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Backdrop;
