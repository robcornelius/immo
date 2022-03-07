import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useSearchResults from "../hooks/SearchResultsHook";
import { fetchPropertyDetails } from "../api/api";

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

const tempArray: any[] = [];
export const SearchResultsTable: React.FC = () => {
  const { propertyDetails, setPropertyDetails, searchResults } =
    useSearchResults();
  const [promiseArray, setPromiseArray] = useState<any>([]);
  const handleGetMoreDetails = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const targetVal = event.target.value;
    if (tempArray.length === 0) {
      tempArray.push(await fetchPropertyDetails(targetVal));
    } else if (tempArray.length > 0) {
      const index = tempArray
        .map(function (e) {
          return e.property.id;
        })
        .indexOf(targetVal);
      if (index < 0) {
        tempArray.push(await fetchPropertyDetails(targetVal));
      } else {
        tempArray.slice(index, 1);
      }
    }
    setPromiseArray([]);
    await setPromiseArray(tempArray);
  };

  useEffect(() => {
    console.log("promiseArray", promiseArray);
    Promise.allSettled(promiseArray)
      .then((res) => setPropertyDetails(res))
      .catch((error) => console.error(error));
  }, [promiseArray]);
  return (
    <>
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
            {propertyDetails.length > 0 &&
              propertyDetails.map((details, i) => {
                return (
                  <tr key={i}>
                    <td>{details.value.property.address}</td>
                    <td>{details.value.property.postcode}</td>
                    <td>{details.value.property.numberOfRooms}</td>
                    <td>{details.value.property.floorArea}</td>
                  </tr>
                );
              })}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
      <StyledTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>√</th>
              <th>Address</th>
              <th>Postcode</th>
              <th>Property Type</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(searchResults) &&
              searchResults.map((address, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        value={address.id}
                        onChange={handleGetMoreDetails}
                      />
                    </td>
                    <td>{address.address}</td>
                    <td>{address.postcode}</td>
                    <td>{address.propertyType}</td>
                  </tr>
                );
              })}
          </tbody>
        </StyledTable>
      </StyledTableContainer>
    </>
  );
};
export default SearchResultsTable;
