import React from'react';

const SearchBar = ({onSearch}) => {

  return (
    <form onSubmit={onSearch}>
      <input type="text"></input>
      <input type="submit" value="Valider"></input>
    </form>
  )
};

export default SearchBar;