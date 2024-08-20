import React, { useState } from "react";
import { GetTeachersInput } from "@/generated";

type Props = {
  children: React.ReactNode;
};

type SearchContextType = {
  setSearchInput: (arg: GetTeachersInput) => void;
  searchInput: GetTeachersInput;
};

const SearchContext = React.createContext<SearchContextType>({} as SearchContextType);

export const SearchProvider = ({ children }: Props) => {
  const [searchInput, setSearchInput] = useState<GetTeachersInput>({
    categoryId: "66c26275a158f892e3d0c567",
    availableDays: [],
    availableTimes: [],
    priceRange: {
      min: "0",
      max: "40000",
    },
  });
  return <SearchContext.Provider value={{ setSearchInput, searchInput }}>{children}</SearchContext.Provider>;
};

export const useSearch = (): SearchContextType => {
  return React.useContext(SearchContext);
};
