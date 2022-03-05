import React from "react";
import styled from "styled-components";
import { SelectedPropertiesTable } from "../tables/table";

const SelectedPropertiesSection = styled.section`
  margin-top: 30px;
`;

const SelectedProperties: React.FC = () => {
  return (
    <SelectedPropertiesSection>
      <h2>Selected Properties</h2>
      <SelectedPropertiesTable />
    </SelectedPropertiesSection>
  );
};

export default SelectedProperties;
