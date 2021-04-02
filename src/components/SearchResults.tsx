// Components
import SearchResult from "./SearchResult";
// Types
import { Game, SearchResultsProps } from "../types";
// Styling
import "../styles/SearchResults.css";

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  error,
  page,
  setPage,
  resultsPerPage,
}) => {
  let pagesArray: number[] = [];

  const generatePageNumbers = (num: number) => {
    let i: number;
    for (i = 0; i < num; i++) {
      pagesArray.push(i + 1);
    }
  };

  generatePageNumbers(Math.ceil(data.count / resultsPerPage));

  const renderPageLinks = () => {
    return (
      pagesArray.length > 1 && (
        <div className="pages">
          {pagesArray.map((pageNo: number) => {
            const standardPageLink = (
              <div
                key={pagesArray.indexOf(pageNo)}
                className={pageNo === page ? "page-active" : "page"}
                onClick={() => setPage(pageNo)}
              >
                {pageNo}
              </div>
            );
            if (pagesArray.length > 10) {
              return (
                pageNo === 1 && (
                  <div key="jump-to" className="jump-to">
                    <div className="label">Page:</div>
                    <select
                      required
                      defaultValue={page}
                      className="dark_select nes-pointer"
                      onChange={(e) => setPage(parseInt(e.target.value))}
                    >
                      {pagesArray.map((page) => (
                        <option
                          key={pagesArray.indexOf(page)}
                          value={pagesArray.indexOf(page) + 1}
                        >
                          {pagesArray.indexOf(page) + 1}
                        </option>
                      ))}
                    </select>

                    <div className="label">of {pagesArray.length}</div>
                  </div>
                )
              );
            } else {
              return standardPageLink;
            }
          })}
        </div>
      )
    );
  };

  return (
    <div className="SearchResults">
      <div className="nes-container with-title is-centered">
        <p className="title">
          {!error.active
            ? `${page * resultsPerPage - (resultsPerPage - 1)}-${
                page * resultsPerPage -
                (resultsPerPage - 1) +
                data.results.length -
                1
              } of ${data.count}`
            : "Whoops!"}
        </p>
        {renderPageLinks()}
        {!error.active ? (
          <div key="SearchResults" className="SearchResults-cards">
            {data.results.map((game: Game) => {
              return (
                <div key={data.results.indexOf(game)}>
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
        {renderPageLinks()}
      </div>
    </div>
  );
};

export default SearchResults;
