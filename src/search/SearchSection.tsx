import React, { useState } from "react";
import styled from "styled-components";
import { fetchProperties } from "../api/api";
import { PropertyTypeEnum } from "../contexts/propertyType";
import useSearchResults from "../hooks/SearchResultsHook";
import propertyType from "../hooks/SearchResultsHook";

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
  const [searchString, setSearchString] = useState<string>("");
  const { propertyType, setSearchResults } = useSearchResults();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value);
  };

  const doSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation;
    let type;
    if (propertyType === PropertyTypeEnum.all) {
      type = undefined;
    } else {
      type = propertyType;
    }
    const options = {
      address: searchString,
      propertyType: type,
    };
    const results = await fetchProperties(options);
    console.log(results);
    debugger;
  };

  return (
    <SearchSectionWrapper>
      <SearchBox onChange={handleChange} />
      <SearchButton onClick={doSearch}>Search</SearchButton>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
