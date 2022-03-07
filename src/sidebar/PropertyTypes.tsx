import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSearchResults from "../hooks/SearchResultsHook";
import { getAvailablePropertyTypes } from "../api/api";

const PropertyTypesSection = styled.section`
  margin-left: 30px;
  margin-top: 300px;
`;

const PropertyList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  background: #f4f5f9;
`;

const PropertyListLi = styled.li`
  list-style-type: none;
  margin-left: 0;
`;

const switchPropertyTypes = (e: React.MouseEvent<HTMLElement>) => {
  const listItems = e.currentTarget.parentElement?.querySelectorAll("li");
  listItems?.forEach((item: HTMLLIElement) => {
    return (item.style.fontWeight = "normal");
  });
  e.currentTarget.style.fontWeight = "bold";
};

type DifferentPropertyTypes = {
  label: string;
  value: string;
};

const PropertyTypesComponent: React.FC = () => {
  const { setPropertyType } = useSearchResults();
  const [propertyTypes, setPropertyTypes] =
    useState<DifferentPropertyTypes[]>();
  const handlePropertyTypeChange = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    switchPropertyTypes(e);
    setPropertyType(
      e.currentTarget.getAttribute("data-value") !== "all"
        ? e.currentTarget.getAttribute("data-value")
        : undefined
    );
  };

  useEffect(() => {
    getAvailablePropertyTypes().then((res) => {
      setPropertyTypes(res.propertyTypes);
    });
  }, []);
  return (
    <PropertyTypesSection>
      <h2>Property Types</h2>
      <PropertyList className="propertyList">
        <PropertyListLi
          data-value="all"
          onClick={handlePropertyTypeChange}
          style={{ fontWeight: "bold" }}
        >
          All
        </PropertyListLi>
      </PropertyList>
      {propertyTypes?.map((type, i) => {
        return (
          <PropertyListLi
            key={i}
            data-value={type.value}
            onClick={handlePropertyTypeChange}
          >
            {type.label}
          </PropertyListLi>
        );
      })}
    </PropertyTypesSection>
  );
};
export default PropertyTypesComponent;
