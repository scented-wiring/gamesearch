import { search } from "../helpers";
// Components
import SearchResult from "./SearchResult";
// Types
import { Game, SearchResultsProps } from "../types";
// Styling
import "../styles/SearchResults.css";
import "nes.css/css/nes.min.css";

const SearchResults: React.FC<SearchResultsProps> = ({
  data,
  error,
  page,
  setPage,
  query,
  setData,
  setError,
  searched,
  setSearched,
  setLoad,
}) => {
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
    setLoad(true);
    setPage(page);
    search(query, page, setData, setError, searched, setSearched, setLoad);
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
          {pagesArray.map((pageNo: number) => {
            if (page !== 1 && pageNo === 1) {
              return (
                <div className="arrow-section">
                  <div
                    className="arrow"
                    onClick={() => handleSetPage(page - 1)}
                  >
                    {"<Prev"}
                  </div>
                  <div
                    className={pageNo === page ? "page-active" : "page"}
                    onClick={() => handleSetPage(pageNo)}
                  >
                    {pageNo}
                  </div>
                </div>
              );
            } else if (
              page !== pagesArray.length &&
              pageNo === pagesArray.length
            ) {
              return (
                <div className="arrow-section">
                  <div
                    className={pageNo === page ? "page-active" : "page"}
                    onClick={() => handleSetPage(pageNo)}
                  >
                    {pageNo}
                  </div>
                  <div
                    className="arrow"
                    onClick={() => handleSetPage(page + 1)}
                  >
                    {"Next>"}
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  className={pageNo === page ? "page-active" : "page"}
                  onClick={() => handleSetPage(pageNo)}
                >
                  {pageNo}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
