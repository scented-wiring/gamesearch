import "../styles/SearchResults.css";
import "nes.css/css/nes.min.css";

import { Data } from "../components/App";

type Props = {
  data: Data;
};

type Game = {
  name: string;
};

const SearchResults: React.FC<Props> = ({ data }) => {
  return (
    <div className="SearchResults">
      <div className="nes-container with-title is-centered">
        <p className="title">Results 1-20 of {data.count}</p>
        {data.results.map((game: Game) => {
          return <div>{game.name}</div>;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
