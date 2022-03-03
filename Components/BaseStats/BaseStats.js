import style from "./BaseStats.module.scss";

function BaseStats({ className, text, percent }) {
  return (
    <div
      tabIndex={0}
      data-tooltip={`${className} (${percent})`}
      className={`${style["progress-bar-wrapper"]} ${
        style[`${className.replace(". ", "")}`]
      }`}
    >
      <div
        className={`${style["progress-bar-percent"]}`}
        style={{ width: `Calc(100% * ${percent}/255)` }}
      ></div>
    </div>
  );
}

export default BaseStats;
