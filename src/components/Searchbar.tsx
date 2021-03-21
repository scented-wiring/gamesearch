import { useState } from "react";
import axios from "axios";

import { Data } from "../components/App";

// Styling
import "nes.css/css/nes.min.css";
import "../styles/SearchBar.css";

type Props = {
  setData: (active: Data) => void;
};

const SearchBar: React.FC<Props> = ({ setData }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}&search_precise=true`
      )
      .then((response) => setData(response.data));
  };

  return (
    <div className="Searchbar">
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
      <button
        type="button"
        className="nes-btn is-primary"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
