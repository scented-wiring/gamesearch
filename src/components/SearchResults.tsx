// Components
import SearchResult from "./SearchResult";
// Types
import { Data, Game } from "../components/App";
// Styling
import "../styles/SearchResults.css";
import "nes.css/css/nes.min.css";

type Props = {
  data: Data;
  error: { active: boolean; message: string };
};

const SearchResults: React.FC<Props> = ({ data, error }) => {
  return (
    <div className="SearchResults">
      <div className="nes-container with-title is-centered">
        <p className="title">
          {!error.active ? `Results 1-20 of ${data.count}` : "Whoops!"}
        </p>
        {!error.active ? (
          <div className="SearchResults-cards">
            {data.results.map((game: Game) => {
              return (
                <div>
                  <SearchResult key={data.results.indexOf(game)} {...game} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="no-results">
            <i className="nes-kirby" />
            <div className="nes-balloon from-left">
              <p>{error.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
