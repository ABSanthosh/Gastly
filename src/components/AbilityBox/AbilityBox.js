import "./AbilityBox.scss";

function AbilityBox({ ability }) {
  return (
    <div className={`AbilityBox ${ability}`}>
      {ability}
    </div>
  );
}


export default AbilityBox;
