import React, { useState } from "react";
import styled from "styled-components";
import { PropertyTypeEnum } from "../contexts/propertyType";
import useSearchResults from "../hooks/SearchResultsHook";

const PropertyTypesSection = styled.section`
  margin-left: 30px;
  margin-top: 300px;
`;

const PropertyList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background: #f4f5f9;
  li {
    margin-left: 0;
  }
`;

const switchPropertyTypes = (e: React.MouseEvent<HTMLElement>) => {
  const listItems = e.currentTarget.parentElement?.querySelectorAll("li");
  listItems?.forEach((item: HTMLLIElement) => {
    return (item.style.fontWeight = "normal");
  });
  e.currentTarget.style.fontWeight = "bold";
};

const PropertyTypes: React.FC = () => {
  const { setPropertyType } = useSearchResults();

  const handlePropertyTypeChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    switchPropertyTypes(e);
    setPropertyType(e.currentTarget.innerHTML as PropertyTypeEnum);
  };

  return (
    <PropertyTypesSection>
      <h2>Property Types</h2>
      <PropertyList className="propertyList">
        <li onClick={handlePropertyTypeChange} style={{ fontWeight: "bold" }}>
          All
        </li>
        <li onClick={handlePropertyTypeChange}>Flat</li>
        <li onClick={handlePropertyTypeChange}>Terraced House</li>
        <li onClick={handlePropertyTypeChange}>Semi-detached</li>
      </PropertyList>
    </PropertyTypesSection>
  );
};
export default PropertyTypes;
