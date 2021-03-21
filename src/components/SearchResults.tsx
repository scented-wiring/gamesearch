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
    <div className="nes-container with-title is-centered">
      <p className="title">Showing search results</p>
      {data.results.map((game: Game) => {
        return <div>{game.name}</div>;
      })}
    </div>
  );
};

export default SearchResults;
