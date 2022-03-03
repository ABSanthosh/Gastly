import style from "./Tabs.module.scss";
import Gender from "../../Assets/Images/Gender.png";
import HeightWeight from "../../Assets/Images/Dimensions.png";
import { useState } from "react";

function Tabs({ height, weight, male, female }) {
  const [activeTab, setActiveTab] = useState("Dime");
  return (
    <div className={style.Tab}>
      <div className={style.Tab__selector}>
        <div
          className={style["Tab__selector--active"]}
          style={{
            "--activeRadius": activeTab === "Dime" ? null : "3px 3px 3px 8px",
            "--translate": activeTab === "Dime" ? "0" : null,
          }}
        />
        <button
          className={`${style["Tab__selector--tab"]} ${style["Tab__selector--tabTop"]}`}
          onClick={() => setActiveTab("Dime")}
          tabIndex="0"
        >
          <img alt="Height and weight" src={HeightWeight.src} />
        </button>
        <button
          className={`${style["Tab__selector--tab"]} ${style["Tab__selector--tabBottom"]}`}
          onClick={() => setActiveTab("Gen")}
          tabIndex="0"

        >
          <img alt="Gender" src={Gender.src} />
        </button>
      </div>
      <div className={style.Tab__Content}>
        {activeTab === "Dime" && (
          <>
            <div className={style["Tab__Content--top"]}>
              <span>Height </span>
              <span>{height}</span>
            </div>
            <div className={style["Tab__Content--bottom"]}>
              <span>Weight</span>
              <span>{weight}</span>
            </div>
          </>
        )}
        {activeTab === "Gen" && (
          <>
            <div className={style["Tab__Content--top"]}>
              <span>Male %</span>
              <span>{male}</span>
            </div>
            <div className={style["Tab__Content--bottom"]}>
              <span>Female %</span>
              <span>{female}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Tabs;
