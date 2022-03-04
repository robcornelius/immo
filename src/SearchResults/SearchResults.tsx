import React from "react";
import styled from "styled-components";

const SearchResultsWrapper = styled.section`
  margin-top: 30px;
`;

const SearchResults: React.FC = () => {
  return (
    <SearchResultsWrapper>
      <h2>Search Results</h2>
      <p>
        <strong>TABLE GOES HERE</strong>
      </p>
    </SearchResultsWrapper>
  );
};
export default SearchResults;
