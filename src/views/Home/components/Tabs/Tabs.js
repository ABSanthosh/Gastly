import "./Tabs.scss";
import Dimensions from "../../../../Assets/JSON/PokemonDimensions.json";
import GenderRatio from "../../../../Assets/JSON/PokemonGenderRatio.json";
import Gender from "../../../../Assets/Images/Gender.png";
import HeightWeight from "../../../../Assets/Images/Dimensions.png";
import { forifier } from "../../../../Util/forifier";

function Tabs({ id }) {
  return (
    <>
      <div className="dimensions__tabs">
        <div
          onClick={() => {
            document.getElementById("heightWeight").style.display = "flex";
            document.getElementById("Gender").style.display = "none";

            document
              .getElementById("tabs__heightweight")
              .classList.add("tabs__activeTab");
            document
              .getElementById("tabs__gender")
              .classList.remove("tabs__activeTab");
          }}
          id="tabs__heightweight"
          className="tabs__heightweight tabs__activeTab"
        >
          <img src={HeightWeight} />
        </div>
        <div
          onClick={() => {
            document.getElementById("heightWeight").style.display = "none";
            document.getElementById("Gender").style.display = "flex";

            document
              .getElementById("tabs__gender")
              .classList.add("tabs__activeTab");
            document
              .getElementById("tabs__heightweight")
              .classList.remove("tabs__activeTab");
          }}
          id="tabs__gender"
          className="tabs__gender"
        >
          <img src={Gender} />
        </div>
      </div>

      <div id="heightWeight" className="tabs__content">
        <div className="topTabContent">
          <span>Height </span>
          <span>{Dimensions[forifier(id)]["Height"]}</span>
        </div>
        <div className="bottomTabContent">
          <span>Weight</span>
          <span>{Dimensions[forifier(id)]["Weight"]}</span>
        </div>
      </div>
      <div id="Gender" className="tabs__content">
        <div className="topTabContent">
          <span>Male %</span>
          <span>{GenderRatio[forifier(id)]["Male"]}</span>
        </div>
        <div className="bottomTabContent">
          <span>Female %</span>
          <span>{GenderRatio[forifier(id)]["Female"]}</span>
        </div>
      </div>
    </>
  );
}

export default Tabs;
