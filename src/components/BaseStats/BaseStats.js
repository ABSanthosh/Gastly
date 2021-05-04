import "./BaseStats.scss";

function BaseStats({ className,text,percent }) {
  return (
    <div className={`progress-bar-wrapper ${className}`}>
      <div className="progress-bar-text">{text}</div>
      <div
        className="progress-bar-percent"
        style={{width: `Calc(100% * ${percent}/255)`}}
      ></div>
    </div>
  );
}

export default BaseStats;
