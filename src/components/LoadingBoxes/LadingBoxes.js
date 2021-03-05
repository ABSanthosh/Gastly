/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
import './loading-boxes.scss';
import logo from '../../Assets/gastly.gif'

function LoadingBoxes() {
  return (
    <div className="loader">
    <img src={logo} />
    </div>
  );
}

export default LoadingBoxes;
