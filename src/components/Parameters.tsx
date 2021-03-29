import { ParametersProps } from "../types";

import "../styles/Parameters.css";

const Parameters: React.FC<ParametersProps> = ({
  setResultsPerPage,
  sortBy,
  setSortBy,
  reverse,
  setReverse,
  exact,
  setExact,
  stores,
  setStores,
}) => {
  const handleReverse = (sortBy: string) => {
    !reverse ? setReverse(true) : setReverse(false);
    sortBy.includes("-")
      ? setSortBy(sortBy.replace("-", ""))
      : setSortBy(`-${sortBy}`);
  };

  const handleFilter = (e: string) => {
    console.log(e);
    const index = stores.indexOf(parseInt(e));
    if (stores.includes(parseInt(e))) {
      setStores(stores.filter((store) => stores.indexOf(store) !== index));
    } else {
      setStores([...stores, parseInt(e)]);
    }
  };

  return (
    <div className="Parameters">
      <div className="nes-container with-title is-centered">
        <p className="title">Search parameters</p>
        <div className="params-row">
          <div className="param">
            <label htmlFor="default_select">Results per page:</label>
            <div className="nes-select">
              <select
                required
                defaultValue={"20"}
                id="default_select"
                onChange={(e) => {
                  setResultsPerPage(parseInt(e.target.value));
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
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
                <option value={!reverse ? "-metacritic" : "metacritic"}>
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
              <input
                type="checkbox"
                className="nes-checkbox"
                onChange={() => (!exact ? setExact(true) : setExact(false))}
              />
              <span>Match exact query</span>
            </label>
          </div>
        </div>
        <div className="params-row">
          <section>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() =>
                (document.getElementById(
                  "dialog-genre"
                )! as HTMLDialogElement).showModal()
              }
            >
              Genres
            </button>
            <dialog className="nes-dialog" id="dialog-genre">
              <form method="dialog">
                <p className="title">Filter by genre</p>
                <p>Alert: this is a dialog.</p>
                <menu className="dialog-menu">
                  <button className="nes-btn">Cancel</button>
                  <button className="nes-btn is-primary">Confirm</button>
                </menu>
              </form>
            </dialog>
          </section>
          <section>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() =>
                (document.getElementById(
                  "dialog-platform"
                )! as HTMLDialogElement).showModal()
              }
            >
              Platforms
            </button>
            <dialog className="nes-dialog" id="dialog-platform">
              <form method="dialog">
                <p className="title">Filter by platform</p>
                <p>Alert: this is a dialog.</p>
                <menu className="dialog-menu">
                  <button className="nes-btn">Cancel</button>
                  <button className="nes-btn is-primary">Confirm</button>
                </menu>
              </form>
            </dialog>
          </section>
          <section>
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={() =>
                (document.getElementById(
                  "dialog-store"
                )! as HTMLDialogElement).showModal()
              }
            >
              Stores
            </button>
            <dialog className="nes-dialog" id="dialog-store">
              <form method="dialog" className="filter-form">
                <p className="title">Exclude stores</p>
                <menu className="dialog-menu">
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={1}
                      />
                      <span>Steam</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={3}
                      />
                      <span>Playstation Store</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={2}
                      />
                      <span>Xbox Store</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={4}
                      />
                      <span>App Store</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={5}
                      />
                      <span>GOG</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={6}
                      />
                      <span>Nintendo Store</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={7}
                      />
                      <span>Xbox 360 Store</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={8}
                      />
                      <span>Google Play</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={9}
                      />
                      <span>itch.io</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) => handleFilter(e.target.value)}
                        value={11}
                      />
                      <span>Epic Games</span>
                    </label>
                  </div>
                  <div className="filter-buttons">
                    <button className="nes-btn is-primary">OK</button>
                  </div>
                </menu>
              </form>
            </dialog>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
