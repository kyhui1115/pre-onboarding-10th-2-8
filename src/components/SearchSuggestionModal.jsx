import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import SearchSuggestionList from "./SearchSuggestionList";

const StyledSearchSuggestionModal = styled.div`
  display: none;
  background-color: white;
  width: 450px;
  min-height: 210px;
  position: absolute;
  top: 103px;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: left;
  padding-left: 20px;

  input:focus ~ & {
    display: block;
  }

  .modalText {
    color: #6a737b;
    font-size: 12px;
  }
`;

SearchSuggestionModal.propTypes = {
  focusIdx: PropTypes.number.isRequired,
  suggestions: PropTypes.array.isRequired,
};

export default function SearchSuggestionModal({ focusIdx, suggestions }) {
  return (
    <StyledSearchSuggestionModal>
      <span className="modalText">추천 검색어</span>
      <SearchSuggestionList focusIdx={focusIdx} suggestions={suggestions} />
    </StyledSearchSuggestionModal>
  );
}