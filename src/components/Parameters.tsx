import { ParametersProps } from "../types";

import "../styles/Parameters.css";

const Parameters: React.FC<ParametersProps> = ({
  setResultsPerPage,
  sortBy,
  setSortBy,
  reverse,
  setReverse,
}) => {
  const handleReverse = (sortBy: string) => {
    !reverse ? setReverse(true) : setReverse(false);
    sortBy.includes("-")
      ? setSortBy(sortBy.replace("-", ""))
      : setSortBy(`-${sortBy}`);
  };

  return (
    <div className="Parameters">
      <div className="nes-container with-title is-centered">
        <p className="title">Search parameters</p>
        <div className="params">
          <div className="param">
            <label htmlFor="default_select">Results per page:</label>
            <div className="nes-select">
              <select
                required
                id="default_select"
                onChange={(e) => {
                  setResultsPerPage(parseInt(e.target.value));
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option selected={true} value="20">
                  20
                </option>
                <option value="40">40</option>
              </select>
            </div>
          </div>
          <div className="param">
            <label htmlFor="default_select">Sort by:</label>
            <div className="nes-select">
              <select
                required
                id="default_select"
                onChange={(e) => {
                  setSortBy(e.target.value);
                }}
              >
                <option value={!reverse ? "-rating" : "rating"}>
                  RAWG rating
                </option>
                <option value={!reverse ? "name" : "-name"}>Name</option>
                <option value={!reverse ? "-released" : "released"}>
                  Released
                </option>
                <option value={!reverse ? "-metacrtic" : "metacritic"}>
                  Metacritic Rating
                </option>
              </select>
            </div>
          </div>
          <div className="checkboxes">
            <label>
              <input
                type="checkbox"
                className="nes-checkbox"
                onChange={() => handleReverse(sortBy)}
              />
              <span>Reverse order</span>
            </label>
            <label>
              <input type="checkbox" className="nes-checkbox" />
              <span>Match exact query</span>
            </label>
            <label>
              <input type="checkbox" className="nes-checkbox" />
              <span>Exclude obscure results</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
