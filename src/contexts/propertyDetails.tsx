import React, { createContext, useState, ReactNode } from "react";

type PropertyDetailProps = { children: ReactNode };

type propertyDetailsType = {
  property: {
    address: string;
    postcode: string;
    numberOfRooms: number;
    floorArea: number;
  };
};

interface IPropertyTypeProps {
  properties: propertyDetailsType[];
  setProperties: (value: any) => void;
}

export const PropertyDetailsContext = createContext({} as IPropertyTypeProps);

const PropertyDetailsProvider = ({ children }: PropertyDetailProps) => {
  const [properties, setProperties] = useState([]);
  return (
    <PropertyDetailsContext.Provider value={{ properties, setProperties }}>
      {children}
    </PropertyDetailsContext.Provider>
  );
};
export default PropertyDetailsProvider;
