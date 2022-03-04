import React from "react";
import styled from "styled-components";
import logo from "./img/immo-logo.svg";

const PageHeaderContainer = styled.header`
  background-color: #f4f5f9;
  height: 80px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div`
  background-image: url(${logo});
  width: 100px;
  height: 100px;
  border: 5px solid #fff;
  position: absolute;
  left: 20px;
  top: 20px;
`;

const PageHeader: React.FC = () => {
  return (
    <PageHeaderContainer>
      <Logo />
      <h1>Property Search Tool</h1>
    </PageHeaderContainer>
  );
};

export default PageHeader;
