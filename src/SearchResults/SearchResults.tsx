import React from "react";
import styled from "styled-components";
import { SearchResultsTable } from "../tables/SearchResultsTable";

const SearchResultsWrapper = styled.section`
  margin-top: 30px;
`;

const SearchResults: React.FC = () => {
  return (
    <SearchResultsWrapper>
      <h2>Search Results</h2>
      <SearchResultsTable />
    </SearchResultsWrapper>
  );
};
export default SearchResults;
