import { useContext } from "react";
import { PropertyDetailsContext } from "../contexts/propertyDetails";

const usePropertyDetails = () => {
  const context = useContext(PropertyDetailsContext);
  if (context === undefined) {
    throw new Error("usePropertyDetails must be used within a context");
  }
  return context;
};
export default usePropertyDetails;
