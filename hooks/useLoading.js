import LoadingBoxes from "../Components/LoadingBoxes/LadingBoxes";
import ReactDOM from "react-dom";

export default function useLoading() {
  const startLoading = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    document.getElementById("root").style.overflow = "hidden";
    document.querySelector("html").style.overflow = "hidden";
    document
      .querySelector(".content__backdrop")
      .insertAdjacentHTML("afterend", '<div id="loading-dock"></div>');
    ReactDOM.render(<LoadingBoxes />, document.getElementById("loading-dock"));
  };

  const stopLoading = () => {
    document.getElementById("root").style.overflow = "unset";
    document.querySelector("html").style.overflow = "unset";
    document.getElementById("loading-dock").remove();
  };

  return {
    startLoading,
    stopLoading,
  };
}
