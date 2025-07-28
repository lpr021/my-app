import React from 'react';
import './SearchBar.css'; // Importing component-specific CSS

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="City / Locality" />
      <input type="text" placeholder="Budget (e.g. 30L - 50L)" />
      <select>
        <option>Property Type</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Plot</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
