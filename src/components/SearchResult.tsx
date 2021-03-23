import { Game } from "../components/SearchResults";

const SearchResult: React.FC<Game> = ({ name }) => {
  return <div className="SearchResult">{name}</div>;
};

export default SearchResult;
