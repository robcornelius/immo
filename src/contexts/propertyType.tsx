import React, { createContext, useState, ReactNode } from "react";

type PropertyTypeProps = { children: ReactNode };

type addressType = {
  address: string;
  postcode: string;
  propertyType: string;
  id: string;
};
type SearchResultsType = {
  address: addressType[];
};

export type PropertyTypesType = {
  label: string;
  value: string;
};
type propertyDetailsType = {
  value: {
    property: {
      address: string;
      postcode: string;
      numberOfRooms: number;
      floorArea: number;
      id: string;
    };
  };
};
interface IPropertyTypeProps {
  searchResults: SearchResultsType;
  setSearchResults: (value: any) => void;
  propertyType: any;
  setPropertyType: (value: any) => void;
  propertyDetails: propertyDetailsType[];
  setPropertyDetails: (value: any) => void;
}

export const SearchResultsContext = createContext({} as IPropertyTypeProps);

const SeaarchResultProvider = ({ children }: PropertyTypeProps) => {
  const [searchResults, setSearchResults] = useState({} as SearchResultsType);
  const [propertyType, setPropertyType] = useState(undefined);
  const [propertyDetails, setPropertyDetails] = useState(
    [] as propertyDetailsType[]
  );
  return (
    <SearchResultsContext.Provider
      value={{
        searchResults,
        setSearchResults,
        propertyType,
        setPropertyType,
        propertyDetails,
        setPropertyDetails,
      }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};
export default SeaarchResultProvider;
