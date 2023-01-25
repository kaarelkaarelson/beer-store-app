import React, { useEffect, useState } from 'react';

const SearchBar = ({
  search,
  onChange,
  suggestions
}: any) => {
  const onSearchChange = (e: any) => onChange(e.target.value);
  const onSuggestionClick = (e: any) => {
    console.log(e.target.innerHTML);
    // @ts-expect-error TS(2304): Cannot find name 'setSearch'.
    setSearch(e.target.innerHTML);
  };

  useEffect(() => {}, []);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="type-ahead-dropdown">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <input
        type="text"
        placeholder="Search style..."
        onChange={onSearchChange}
        value={search}
      />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ul>
        {suggestions.length > 0 &&
          // @ts-expect-error TS(2552): Cannot find name 'map'. Did you mean 'Map'?
          map((item: any, i: any) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <li key={i} value={item.style} onClick={onSuggestionClick}>
              {item.style}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBar;
