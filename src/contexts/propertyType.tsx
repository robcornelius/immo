import React, { createContext, useState, ReactNode } from "react";

type PropertyTypeProps = { children: ReactNode };

export enum PropertyTypeEnum {
  all = "ALL",
  flat = "flat",
  terrace = "terraced",
  semi = "semi-detached",
}
type SearchResultsType = {
  address: string;
  postcode: string;
  propertyType: string;
  numberOfRooms: number;
  floorArea: number;
};

interface IPropertyTypeProps {
  searchResults: SearchResultsType;
  setSearchResults: (value: SearchResultsType) => void;
  propertyType: string;
  setPropertyType: (value: PropertyTypeEnum) => void;
}

export const SearchResultsContext = createContext({} as IPropertyTypeProps);

const SeaarchResultProvider = ({ children }: PropertyTypeProps) => {
  const [searchResults, setSearchResults] = useState<SearchResultsType>(
    {} as SearchResultsType
  );
  const [propertyType, setPropertyType] = useState<string>(
    PropertyTypeEnum.all
  );
  return (
    <SearchResultsContext.Provider
      value={{ searchResults, setSearchResults, propertyType, setPropertyType }}
    >
      {children}
    </SearchResultsContext.Provider>
  );
};
export default SeaarchResultProvider;
