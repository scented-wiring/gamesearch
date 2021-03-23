import SearchResult from "./SearchResult";

import { Data, Game } from "../components/App";

import "../styles/SearchResults.css";
import "nes.css/css/nes.min.css";

type Props = {
  data: Data;
};

const SearchResults: React.FC<Props> = ({ data }) => {
  return (
    <div className="SearchResults">
      <div className="nes-container with-title is-centered">
        <p className="title">Results 1-20 of {data.count}</p>
        <div className="SearchResults-cards">
          {data.results.map((game: Game) => {
            return (
              <div>
                <SearchResult key={data.results.indexOf(game)} {...game} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
