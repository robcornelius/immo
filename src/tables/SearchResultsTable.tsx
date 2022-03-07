import React, { useEffect, useState } from "react";
import { message } from "antd";
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
  const [searchResultsDetails, setSearchResultsDetails] = useState<any>([]);

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
    Promise.allSettled(promiseArray)
      .then((res) => setPropertyDetails(res))
      .catch((error) => {
        console.error(error);
        message.info(
          "Something eldritch has eaten your request. Pray that it does not eat you"
        );
      });
  }, [promiseArray]);

  useEffect(() => {
    setSearchResultsDetails(searchResults);
  }, [searchResults]);

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
              <th>Number of Rooms</th>
              <th>
                Floor Area m<sup>2</sup>
              </th>
            </tr>
          </thead>
          <tbody>
            {searchResultsDetails.length > 0 &&
              searchResultsDetails.map((dets: any, i: number) => {
                return (
                  <tr key={i}>
                    <td>
                      <input
                        type="checkbox"
                        value={dets.property.id}
                        onChange={handleGetMoreDetails}
                      />
                    </td>
                    <td>{dets.property.address}</td>
                    <td>{dets.property.postcode}</td>
                    <td>{dets.property.propertyType}</td>
                    <td>{dets.property.numberOfRooms}</td>
                    <td>{dets.property.floorArea}</td>
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
