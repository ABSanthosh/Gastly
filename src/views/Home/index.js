import { useParams } from "react-router-dom";
import "./Homeindex.scss";

function Home() {
  let { id } = useParams();
  return (
    <div className="Maincontainer">
      <link
        type="text/css"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css?v=2214135"
        rel="stylesheet"
      />
      <div className="Maincontainer__contentwrapper">
        <div className="Maincontainer__backdrop">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill-opacity="0.5"
              d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,74.7C672,107,768,181,864,202.7C960,224,1056,192,1152,149.3C1248,107,1344,53,1392,26.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill-opacity="1"
              d="M0,256L48,234.7C96,213,192,171,288,133.3C384,96,480,64,576,96C672,128,768,224,864,229.3C960,235,1056,149,1152,101.3C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="Maincontainer__content">
          <div className="content__details">
            <div className="fa fa-caret-left" />
            <p style={{fontSize:'45px'}}>{id}</p>
            <div className="fa fa-caret-right" />
          </div>
          <div className="content__image"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
