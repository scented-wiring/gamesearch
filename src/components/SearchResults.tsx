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
    let i;
    for (i = 0; i < num; i++) {
      pagesArray.push(i + 1);
    }
  };

  generatePageNumbers(Math.ceil(data.count / resultsPerPage));

  return (
    <div className="SearchResults">
      <div className="nes-container with-title is-centered">
        <p className="title">
          {!error.active
            ? `Page ${page} of ${pagesArray.length} - Results ${
                page * resultsPerPage - (resultsPerPage - 1)
              }-${
                page * resultsPerPage -
                (resultsPerPage - 1) +
                data.results.length -
                1
              } of ${data.count}`
            : "Whoops!"}
        </p>
        {pagesArray.length > 1 && (
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
                  <div>
                    {pageNo === 1 && (
                      <div className="jump-to">
                        <label>Page:</label>
                        <div className="nes-select is-dark">
                          <select
                            required
                            id="dark_select"
                            onChange={(e) => setPage(parseInt(e.target.value))}
                          >
                            <option value="" disabled selected hidden>
                              {page}
                            </option>
                            {pagesArray.map((page) => (
                              <option value={pagesArray.indexOf(page) + 1}>
                                {pagesArray.indexOf(page) + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                );
              } else {
                if (pagesArray.length >= 3 && page !== 1 && pageNo === 1) {
                  return (
                    <div key="prev-section" className="arrow-section">
                      <div
                        key="prev"
                        className="arrow"
                        onClick={() => setPage(page - 1)}
                      >
                        {"<Prev"}
                      </div>
                      {standardPageLink}
                    </div>
                  );
                } else if (
                  pagesArray.length >= 3 &&
                  page !== pagesArray.length &&
                  pageNo === pagesArray.length
                ) {
                  return (
                    <div key="next-section" className="arrow-section">
                      {standardPageLink}
                      <div
                        key="next"
                        className="arrow"
                        onClick={() => setPage(page + 1)}
                      >
                        {"Next>"}
                      </div>
                    </div>
                  );
                } else {
                  return standardPageLink;
                }
              }
            })}
          </div>
        )}
        {!error.active ? (
          <div className="SearchResults-cards">
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
      </div>
    </div>
  );
};

export default SearchResults;
