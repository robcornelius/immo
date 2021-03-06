import React, { useState } from "react";
import styled from "styled-components";
import { fetchProperties, fetchPropertyDetails } from "../api/api";
import useSearchResults from "../hooks/SearchResultsHook";

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
const extrasArray: any[] = [];
const SearchSection: React.FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const { propertyType, setSearchResults } = useSearchResults();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchString(e.currentTarget.value);
  };

  const doSearch = async () => {
    const address = searchString;
    const results = await fetchProperties({ address, propertyType });
    for (let x = 0; x < results?.properties.length; x++) {
      extrasArray.push(await fetchPropertyDetails(results.properties[x].id));
    }
    setSearchResults(extrasArray);
  };
  return (
    <SearchSectionWrapper>
      <SearchBox onChange={handleChange} />
      <SearchButton onClick={doSearch}>Search</SearchButton>
    </SearchSectionWrapper>
  );
};

export default SearchSection;
