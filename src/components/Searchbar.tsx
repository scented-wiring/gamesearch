// Dependencies
import { search } from "../helpers";
// Types
import { Data } from "../components/App";
// Styling
import "nes.css/css/nes.min.css";
import "../styles/SearchBar.css";

type Props = {
  query: string;
  setQuery: (active: string) => void;
  setData: (active: Data) => void;
  setError: (active: { active: boolean; message: string }) => void;
  searched: boolean;
  setSearched: (active: boolean) => void;
  page: number;
};

const SearchBar: React.FC<Props> = ({
  query,
  setQuery,
  setData,
  setError,
  searched,
  setSearched,
  page,
}) => {
  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    search(query, page, setData, setError, searched, setSearched);
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
