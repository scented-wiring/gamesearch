// Dependencies
import React, { useState } from "react";
import axios from "axios";
// Types
import { Data } from "../components/App";
// Styling
import "nes.css/css/nes.min.css";
import "../styles/SearchBar.css";

type Props = {
  setData: (active: Data) => void;
  setError: (active: { active: boolean; message: string }) => void;
  searched: boolean;
  setSearched: (active: boolean) => void;
  page: number;
};

const SearchBar: React.FC<Props> = ({
  setData,
  setError,
  searched,
  setSearched,
  page,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    axios
      .get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}&search_precise=true&page=${page}`
      )
      .then((response) => {
        setData(response.data);
        !searched && setSearched(true);
        if (response.data.count === 0) {
          setError({ active: true, message: "No results found!" });
        } else {
          setError({ active: false, message: "" });
        }
      })
      .catch(() => {
        setError({ active: true, message: "Couldn't connect to server!" });
      });
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
            onChange={(e) => setQuery(e.target.value)}
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
