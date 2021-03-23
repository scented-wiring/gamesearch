import { Game } from "../components/App";

import "nes.css/css/nes.min.css";
import "../styles/SearchResult.css";

const SearchResult: React.FC<Game> = ({
  background_image,
  name,
  platforms,
  released,
  metacritic,
}) => {
  return (
    <div className="SearchResult">
      <div className="name">{name}</div>
      {background_image && (
        <img className="screenshot" src={background_image} alt={name} />
      )}
      {released && <div className="released">Released: {released}</div>}
      {platforms && (
        <div className="platforms">
          Platforms:
          <div className="platforms-list">
            {platforms.map((result) =>
              platforms.length - 1 === platforms.indexOf(result) ? (
                <div className="platform">{result.platform.name}</div>
              ) : (
                <div className="platform">{result.platform.name},&nbsp;</div>
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
