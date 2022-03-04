import React from "react";
import PropTypes from "prop-types";
import style from "./AutoCompleteSearch.module.scss";
import { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useRouter } from "next/router";

function AutoCompleteSearch({ suggestion }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestedValue, setSuggestedValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();
  const fuse = new Fuse(suggestion, {
    includeScore: true,
    keys: ["id", "Name"],
  });

  const isMatching = (inputValue, suggestedValue) => {
    return (
      inputValue.length > 0 &&
      suggestedValue &&
      suggestedValue.substring(0, inputValue.length) === inputValue
    );
  };

  return (
    <div className={style.AutoCompleteSearchWrapper}>
      <span
        className={`fa fa-search ${style.AutoCompleteSearchWrapper__icon}`}
      ></span>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          const searchResult = fuse.search(e.target.value);
          if (e.target.value.length > 0 && searchResult.length > 0) {
            setSuggestedValue(searchResult[0].item);
          } else {
            setSuggestedValue("");
          }
        }}
        onKeyDown={(e) => {
          if (inputValue?.length > 0) {
            if (e.key === "Tab") {
              e.preventDefault();
            }
          }
        }}
        onKeyUp={(e) => {
          if (
            (e.key === "Tab" || e.key === "Enter") &&
            inputValue.length > 0
          ) {
            setInputValue(suggestedValue?.Name);
            // console.log(suggestedValue.id, parseInt(suggestedValue?.id));
            if (
              suggestedValue &&
              suggestedValue.id &&
              parseInt(suggestedValue?.id) !== NaN
            ) {
              router.push(`/${parseInt(suggestedValue?.id)}`);
              e.target.blur();
            }
          }
        }}
        onBlur={(e) => {
          setInputValue("");
          setSuggestedValue("");
          setIsFocused(false);
        }}
        onFocus={(e) => setIsFocused(true)}
        className={style.AutoCompleteSearchWrapper__input}
      ></input>
      <div
        className={
          isFocused
            ? style.AutoCompleteSearchWrapper__typeAheadFocus
            : style.AutoCompleteSearchWrapper__typeAheadBlur
        }
        style={{
          "--typeAheadPadding": isMatching(
            inputValue || "",
            suggestedValue?.Name
          )
            ? null
            : "10px",
          fontSize: isMatching(inputValue || "", suggestedValue?.Name)
            ? "25px"
            : "1.1rem",
          alignItems: isMatching(inputValue || "", suggestedValue?.Name)
            ? "flex-start"
            : "flex-end",

          justifyContent: isMatching(inputValue || "", suggestedValue?.Name)
            ? null
            : "flex-start",

          height: isFocused ? "100%" : "50px",
          width: isFocused ? "100%" : "50px",
        }}
      >
        {isFocused && suggestedValue?.Name}
      </div>
    </div>
  );
}

AutoCompleteSearch.propTypes = {
  // bla: PropTypes.string,
};

AutoCompleteSearch.defaultProps = {
  // bla: 'test',
};

export default AutoCompleteSearch;
