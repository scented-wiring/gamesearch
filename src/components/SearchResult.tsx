import moment from "moment";
// Types
import { Game } from "../types";
// Styling
import noimage from "../noimage.jpg";
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
  let divStyle;

  if (metacritic >= 75) {
    divStyle = {
      background: "lime",
    };
  } else if (metacritic >= 50) {
    divStyle = {
      background: "orange",
    };
  } else {
    divStyle = {
      background: "red",
    };
  }

  return (
    <div className="SearchResult">
      <div className="nes-container is-rounded is-dark">
        <div className="name">{name}</div>
      </div>
      <img
        className="screenshot"
        src={background_image ? background_image : noimage}
        alt={name}
      />
      {released && (
        <div className="released">
          Released {moment(released).format("MMM Do YYYY")}
        </div>
      )}
      {genres.length >= 1 && (
        <div className="list-header">
          Genres:
          <div className="list">
            {genres.map((result) =>
              genres.length - 1 === genres.indexOf(result) ? (
                <div key={genres.indexOf(result)} className="list-item">
                  {result.name}
                </div>
              ) : (
                <div key={genres.indexOf(result)} className="list-item">
                  {result.name},&nbsp;
                </div>
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
                <div key={platforms.indexOf(result)} className="list-item">
                  {result.platform.name}
                </div>
              ) : (
                <div key={platforms.indexOf(result)} className="list-item">
                  {result.platform.name},&nbsp;
                </div>
              )
            )}
          </div>
        </div>
      )}
      {metacritic && (
        <div className="metacritic">
          Metacritic:&nbsp;
          <div className="score" style={divStyle}>
            {metacritic}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResult;
