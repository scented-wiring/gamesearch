import $ from "jquery";
import { useEffect } from "react";
import { genresArray, platformsArray, storesArray } from "../filterArrays";

import { ParametersProps } from "../types";

import "nes.css/css/nes.min.css";
import "../styles/Parameters.css";

const Parameters: React.FC<ParametersProps> = ({
  setResultsPerPage,
  sortBy,
  setSortBy,
  reverse,
  setReverse,
  exact,
  setExact,
  genres,
  setGenres,
  platforms,
  setPlatforms,
  stores,
  setStores,
}) => {
  useEffect(() => {
    $("#toggle-pop-up").click(() => {
      $("#pop-up").toggle();
      $("#pop-up-status").text() === "Open"
        ? $("#pop-up-status").text("Close")
        : $("#pop-up-status").text("Open");
    });
  }, []);

  useEffect(() => {
    $("#filter-genres input:checkbox:checked").length
      ? $("#filter-genres-button").addClass("nes-btn is-success")
      : $("#filter-genres-button").removeClass("is-success");
    $("#filter-platforms input:checkbox:checked").length
      ? $("#filter-platforms-button").addClass("nes-btn is-success")
      : $("#filter-platforms-button").removeClass("is-success");
    $("#filter-stores input:checkbox:checked").length
      ? $("#filter-stores-button").addClass("nes-btn is-success")
      : $("#filter-stores-button").removeClass("is-success");
  });

  const handleReverse = (sortBy: string) => {
    !reverse ? setReverse(true) : setReverse(false);
    sortBy.includes("-")
      ? setSortBy(sortBy.replace("-", ""))
      : setSortBy(`-${sortBy}`);
  };

  const handleFilter = (
    e: string,
    array: number[],
    setArray: (active: number[]) => void
  ) => {
    const index = array.indexOf(parseInt(e));
    if (array.includes(parseInt(e))) {
      setArray(array.filter((item) => array.indexOf(item) !== index));
    } else {
      setArray([...array, parseInt(e)]);
    }
  };

  const renderCheckboxes = (
    array: { name: string; value: number }[],
    params: number[],
    setParams: (active: number[]) => void
  ) => {
    return array.map((object) => {
      return (
        <label key={array.indexOf(object)}>
          <input
            type="checkbox"
            className="nes-checkbox"
            onChange={(e) => handleFilter(e.target.value, params, setParams)}
            value={object.value}
            key={array.indexOf(object)}
          />
          <span>{object.name}</span>
        </label>
      );
    });
  };

  return (
    <div className="Parameters">
      <div className="nes-container with-title is-centered">
        <p className="title">Search parameters</p>
        <div className="params-row nes-pointer" id="toggle-pop-up">
          <i className="nes-logo" />
          <div id="pop-up-status">Open</div>
        </div>
        <span id="pop-up">
          <div className="params-row">
            <div className="param">
              <label htmlFor="default_select">Results:</label>
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
                    RAWG score
                  </option>
                  <option value={!reverse ? "name" : "-name"}>Name</option>
                  <option value={!reverse ? "-released" : "released"}>
                    Released
                  </option>
                  <option value={!reverse ? "-metacritic" : "metacritic"}>
                    Metacritic score
                  </option>
                </select>
              </div>
            </div>
          </div>
          <label>Filter by:</label>
          <div className="params-row">
            <div className="param">
              <section>
                <button
                  type="button"
                  id="filter-genres-button"
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
                  <form id="filter-genres" method="dialog">
                    <p className="title">Filter by genre:</p>
                    <menu className="dialog-menu">
                      <div className="filter-checkboxes">
                        {renderCheckboxes(genresArray, genres, setGenres)}
                      </div>
                      <button className="nes-btn is-success">Close</button>
                    </menu>
                  </form>
                </dialog>
              </section>
            </div>
            <div className="param">
              <section>
                <button
                  type="button"
                  id="filter-platforms-button"
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
                  <form method="dialog" id="filter-platforms">
                    <p className="title">Filter by platform:</p>
                    <menu className="dialog-menu">
                      <div className="category-title">Desktop</div>
                      <div className="filter-checkboxes" id="desktop">
                        {renderCheckboxes(
                          platformsArray[0].desktop,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">Sony</div>
                      <div className="filter-checkboxes" id="sony">
                        {renderCheckboxes(
                          platformsArray[0].sony,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">Nintendo</div>
                      <div className="filter-checkboxes" id="nintendo">
                        {renderCheckboxes(
                          platformsArray[0].nintendo,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">Microsoft</div>
                      <div className="filter-checkboxes" id="microsoft">
                        {renderCheckboxes(
                          platformsArray[0].microsoft,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">SEGA</div>
                      <div className="filter-checkboxes" id="sega">
                        {renderCheckboxes(
                          platformsArray[0].sega,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">Mobile</div>
                      <div className="filter-checkboxes" id="mobile">
                        {renderCheckboxes(
                          platformsArray[0].mobile,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <div className="category-title">Retro</div>
                      <div className="filter-checkboxes" id="retro">
                        {renderCheckboxes(
                          platformsArray[0].retro,
                          platforms,
                          setPlatforms
                        )}
                      </div>
                      <button className="nes-btn is-success">Close</button>
                    </menu>
                  </form>
                </dialog>
              </section>
            </div>
            <div className="param">
              <section>
                <button
                  type="button"
                  id="filter-stores-button"
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
                  <form method="dialog" id="filter-stores">
                    <p className="title">Filter by stores:</p>
                    <menu className="dialog-menu">
                      <div className="filter-checkboxes">
                        {renderCheckboxes(storesArray, stores, setStores)}
                      </div>
                      <button className="nes-btn is-success">Close</button>
                    </menu>
                  </form>
                </dialog>
              </section>
            </div>
          </div>
          <div className="params-row">
            <div className="param">
              <label>
                <input
                  type="checkbox"
                  className="nes-checkbox"
                  onChange={() => handleReverse(sortBy)}
                />
                <span>Reverse</span>
              </label>
            </div>
            <div className="param">
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
        </span>
      </div>
    </div>
  );
};

export default Parameters;
