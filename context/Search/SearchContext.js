import { createContext, useState, useReducer } from 'react';
import searchReducer from './SearchReducer';
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const initialState = {
    searchResults: [],
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
