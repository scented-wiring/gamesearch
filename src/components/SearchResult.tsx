import { Game } from "../components/App";

import "nes.css/css/nes.min.css";
import "../styles/SearchResult.css";

const SearchResult: React.FC<Game> = ({
  background_image,
  name,
  genres,
  platforms,
  released,
  metacritic,
}) => {
  return (
    <div className="SearchResult">
      <div className="nes-container is-rounded is-dark">
        <div className="name">{name}</div>
      </div>
      {background_image && (
        <img className="screenshot" src={background_image} alt={name} />
      )}
      {released && <div className="released">Released: {released}</div>}
      {genres.length >= 1 && (
        <div className="list-header">
          Genres:
          <div className="list">
            {genres.map((result) =>
              genres.length - 1 === genres.indexOf(result) ? (
                <div className="list-item">{result.name}</div>
              ) : (
                <div className="list-item">{result.name},&nbsp;</div>
              )
            )}
          </div>
        </div>
      )}
      {platforms && (
        <div className="list-header">
          Platforms:
          <div className="list">
            {platforms.map((result) =>
              platforms.length - 1 === platforms.indexOf(result) ? (
                <div className="list-item">{result.platform.name}</div>
              ) : (
                <div className="list-item">{result.platform.name},&nbsp;</div>
              )
            )}
          </div>
        </div>
      )}
      {metacritic && <div className="metacritic">Metacritic: {metacritic}</div>}
    </div>
  );
};

export default SearchResult;
