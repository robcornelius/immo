import React from "react";
import styled from "styled-components";
import tick from "./img/iconmonstr-check-mark-1.svg";
import useSearchResults from "../hooks/SearchResultsHook";

const StyledTableContainer = styled.div`
  width: 100%;
  background-color: #f4f5f9;
  padding: 0 0 40px 0;
`;
const StyledTable = styled.table`
  width: 100%;
  background-color: #f4f5f9;
  thead {
    background: #fff;
  }
  thead th {
    align: center;
    font-weight: bold;
    height: 50px;
    background: #e6e6e6;
  }
  thead th:not(:last-child) {
    border-right: 2px solid #fff;
  }
  tbody {
    border-top: 2px solid #cacacf;
  }
  tbody tr {
    border-bottom: 1px solid #9f9fa6;
  }
`;
const Tick = styled.div`
  background: url(${tick}) 0 0 no-repeat;
  background-size: 20px 20px;
  width: 20px;
  height: 20px;
  margin-left: 20px;
`;

export const SearchResultsTable: React.FC = () => {
  const { searchResults, propertyType } = useSearchResults();

  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>
              <Tick />
            </th>
            <th>Address</th>
            <th>Postcode</th>
            <th>Property Type</th>
            <th>Number of Rooms</th>
            <th>
              Floor Area (m<sup>2</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>FOOBAR</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export const SelectedPropertiesTable: React.FC = () => {
  return (
    <StyledTableContainer>
      <StyledTable>
        <thead>
          <tr>
            <th>Address</th>
            <th>Postcode</th>
            <th>Number of Rooms</th>
            <th>
              Floor Area (m<sup>2</sup>)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={4}>FOOBAR</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};
