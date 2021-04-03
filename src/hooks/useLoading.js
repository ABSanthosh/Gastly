import LoadingBoxes from "../components/LoadingBoxes/LadingBoxes";
import ReactDOM from "react-dom";
import { overflow } from "../Util/overflow";

export function useLoading() {
  const startLoading = () => {
    document.getElementById("root").style.overflow = "hidden";
    document
      .querySelector(".Maincontainer__backdrop")
      .insertAdjacentHTML("afterend", '<div id="loading-dock"></div>');
    ReactDOM.render(<LoadingBoxes />, document.getElementById("loading-dock"));
  };

  const stopLoading = () => {
    document.getElementById("root").style.overflow = "unset";
    document.getElementById("loading-dock").remove();
  };

  return {
    startLoading,
    stopLoading,
  };
}
