import ImgLoading from "../components/ImageLoading/ImageLoading";
import ReactDOM from "react-dom";

export function useImgLoading() {
  const startImgLoading = () => {
    try {
      document.getElementById("loading-img-dock").remove();
    } catch (e) {}
    document
      .querySelector(".rightChevron")
      .insertAdjacentHTML("afterend", '<div id="loading-img-dock"></div>');
    ReactDOM.render(
      <ImgLoading />,
      document.getElementById("loading-img-dock")
    );
  };

  const stopImgLoading = () => {
    document.getElementById("loading-img-dock").remove();
  };

  return {
    startImgLoading,
    stopImgLoading,
  };
}
