import React from "react";
import styled from "styled-components";

const SelectedPropertiesSection = styled.section`
  margin-top: 30px;
`;

const SelectedProperties: React.FC = () => {
  return (
    <SelectedPropertiesSection>
      <h2>Selected Properties</h2>
      <p>
        <strong>TABLE GOES HERE</strong>
      </p>
    </SelectedPropertiesSection>
  );
};

export default SelectedProperties;
