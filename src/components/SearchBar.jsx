import React, { useEffect, useState } from 'react';

const SearchBar = ({ search, onChange, suggestions }) => {
  const onSearchChange = (e) => onChange(e.target.value);
  const onSuggestionClick = (e) => {
    console.log(e.target.innerHTML);
    setSearch(e.target.innerHTML);
  };

  useEffect(() => {
    console.log(suggestions);
  }, []);

  return (
    <div className="type-ahead-dropdown">
      <input
        type="text"
        placeholder="Search style..."
        onChange={onSearchChange}
        value={search}
      />
      <ul>
        {suggestions.length > 0 &&
          map((item, i) => (
            <li key={i} value={item.style} onClick={onSuggestionClick}>
              {item.style}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
