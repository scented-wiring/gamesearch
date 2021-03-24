import { search } from "../helpers";
// Types
import { SearchBarProps } from "../types";
// Styling
import "nes.css/css/nes.min.css";
import "../styles/SearchBar.css";

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  setData,
  setError,
  searched,
  setSearched,
  page,
  setPage,
  setLoad,
}) => {
  const handleSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setPage(1);
    if (query) {
      setLoad(true);
      search(query, page, setData, setError, searched, setSearched, setLoad);
    } else {
      setData({ count: 0, results: [] });
      setError({
        active: true,
        message: "You must enter a query.",
      });
      setSearched(true);
    }
    !searched && setSearched(true);
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
