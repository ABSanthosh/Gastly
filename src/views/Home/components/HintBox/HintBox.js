import "./HintBox.scss";

import {
  suggestions,
  suggestionsWithJustNames,
} from "../../../../Util/suggestions";

import { Hint } from "react-autocomplete-hint";
import { useHistory } from "react-router-dom";

function HintBox({ text, setText }) {
  let history = useHistory();
  return (
    <Hint options={suggestions()} allowTabFill>
      <input
        className="content__inputBox"
        id="myText"
        value={text}
        type="text"
        autoComplete="off"
        spellCheck="false"
        autoCapitalize="off"
        autoCorrect="off"
        onBlur={() => {
          if (text != "") {
            setText("");
          }
        }}
        onChange={(e) => {
          setText(e.target.value);

          if (suggestionsWithJustNames().includes(e.target.value)) {
            document.getElementById("myText").blur();
            if (e.target.value.includes("#")) {
              history.push(
                "/" + String(parseInt(e.target.value.split(" #")[1]))
              );
            } else {
              history.push(
                "/" + String(parseInt(e.target.value.split(" ")[0]))
              );
            }

            setText("");
          }
        }}
      />
    </Hint>
  );
}

export default HintBox;
