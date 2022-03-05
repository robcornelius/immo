import { useContext } from "react";
import { SearchResultsContext } from "../contexts/propertyType";
const useSearchResults = () => {
  const context = useContext(SearchResultsContext);
  if (context === undefined) {
    throw new Error("useSearchResults must be used withing a context");
  }
  return context;
};
export default useSearchResults;
