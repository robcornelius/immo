import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  height: 30px;
  background: #f1d644;
  margin-left: 20px;
  border: 1px solid #f1cf40;
  border-radius: 2px;
`;
const SearchBox = styled.input`
  width: 500px;
  height: 30px;
  border: 1px solid #f3f3f3;
  padding: 2px;
`;

const SearchSectionWrapper = styled.section`
  margin-top: 20px;
`;

const SearchSection: React.FC = () => {
  return (
    <SearchSectionWrapper>
      <SearchBox />
      <SearchButton>Search</SearchButton>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
