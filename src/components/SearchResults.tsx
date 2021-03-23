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
  setPage: (active: number) => any;
};

const SearchResults: React.FC<Props> = ({ data, error, setPage }) => {
  let pagesArray: number[] = [];

  const generatePageNumbers = (num: number) => {
    let i;
    for (i = 0; i < num; i++) {
      pagesArray.push(i + 1);
    }
  };

  generatePageNumbers(Math.ceil(data.count / 20));
  console.log(pagesArray);

  const handleSetPage = (page: number) => {
    setPage(page);
  };

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
        <div className="pages">
          {pagesArray.map((page: number) => {
            return (
              <div className="page" onClick={() => handleSetPage(page)}>
                {page}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
