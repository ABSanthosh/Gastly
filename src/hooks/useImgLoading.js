import ImgLoading from "../components/ImageLoading/ImageLoading";
import ReactDOM from "react-dom";

export function useImgLoading() {
  const startImgLoading = () => {
    // document.getElementById("root").style.overflow = "hidden";
    document
      .querySelector(".leftChevron")
      .insertAdjacentHTML("afterend", '<div id="loading-img-dock"></div>');
    // document.querySelector(".content__Sprite").style.visibility = "hidden";

    ReactDOM.render(
      <ImgLoading />,
      document.getElementById("loading-img-dock")
    );
  };

  const stopImgLoading = () => {
    // document.getElementById("root").style.overflow = "unset";
    // document.querySelector(".content__Sprite").style.visibility = "unset";
    document.getElementById("loading-img-dock").remove();
  };

  return {
    startImgLoading,
    stopImgLoading,
  };
}
