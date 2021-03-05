import ReactDOM from 'react-dom';
import LoadingBoxes from '../components/LoadingBoxes/LadingBoxes';

export function useLoading() {
  const startLoading = () => {
    document
      .querySelector(".Maincontainer__backdrop")
      .insertAdjacentHTML('afterend', '<div id="loading-dock"></div>');
    ReactDOM.render(<LoadingBoxes />, document.getElementById('loading-dock'));
  };

  const stopLoading = () => {
    document.getElementById('loading-dock').remove();
  };

  return {
    startLoading,
    stopLoading
  };
}
