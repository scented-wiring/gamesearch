import { useState } from "react";
// Types
import { SearchBarProps } from "../types";
// Styling
import "nes.css/css/nes.min.css";
import "../styles/SearchBar.css";

const SearchBar: React.FC<SearchBarProps> = ({
  setQuery,
  searched,
  setSearched,
  setPage,
}) => {
  const [queryString, setQueryString] = useState("");

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    !searched && setSearched(true);
    setPage(1);
    setQuery(queryString);
  };

  return (
    <div className="Searchbar">
      <form className="search-form" onSubmit={handleSearch}>
        <div className="nes-field">
          <input
            type="text"
            id="search_field"
            className="nes-input"
            placeholder="Enter query"
            autoComplete="off"
            onChange={(e) => setQueryString(e.target.value)}
          />
        </div>
        <button type="submit" className="nes-btn is-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
