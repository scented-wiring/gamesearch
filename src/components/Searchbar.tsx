import { useState } from "react";
import axios from "axios";

import "nes.css/css/nes.min.css";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}`
      )
      .then((response) => console.log(response));
  };

  return (
    <div className="Searchbar">
      <div className="nes-field">
        <input
          type="text"
          id="search_field"
          className="nes-input"
          placeholder="Enter query"
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

export default Searchbar;
