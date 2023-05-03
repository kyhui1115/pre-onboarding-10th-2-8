import { useEffect, useState } from "react";

export default function useSuggestionFocus(suggestions) {
  const [focusIdx, setFocusIdx] = useState(-2);
  const [focusResult, setFocusResult] = useState("");
  const suggestionLength = suggestions.length;

  const changeIdxNum = (e) => {
    if (suggestionLength > 0) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setFocusIdx((prev) => (prev + 1) % suggestionLength);
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (focusIdx === -2) {
          setFocusIdx(suggestionLength - 1);
        }
        setFocusIdx((prev) => (prev - 1 + suggestionLength) % suggestionLength);
      }

      if (e.key === "Enter") {
        if (focusIdx >= 0) {
          setFocusResult(suggestions[focusIdx].name);
          setFocusIdx(-1);
        }
      }

      if (e.keyCode === 8) {
        setFocusIdx(-1);
      }
    }
  };

  useEffect(() => {
    setFocusIdx(-2);
  }, [suggestions, setFocusIdx]);

  return {
    changeIdxNum,
    focusIdx,
    focusResult,
  };
}