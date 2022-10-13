import { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [player, setPlayer] = useState('Anthony');
  return (
    <SearchContext.Provider
      value={{
        player,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
