import React from "react";
import styled from "styled-components";

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

const PropertyTypes: React.FC = () => {
  return (
    <PropertyTypesSection>
      <h2>Property Types</h2>
      <PropertyList>
        <li>All</li>
        <li>Flat</li>
        <li>Terraced House</li>
        <li>Semi-detached</li>
      </PropertyList>
    </PropertyTypesSection>
  );
};
export default PropertyTypes;
