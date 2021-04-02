import $ from "jquery";
import { useEffect } from "react";

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
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={4}
                          />
                          <span>Action</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={51}
                          />
                          <span>Indie</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={3}
                          />
                          <span>Adventure</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={5}
                          />
                          <span>RPG</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={10}
                          />
                          <span>Strategy</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={2}
                          />
                          <span>Shooter</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={40}
                          />
                          <span>Casual</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={14}
                          />
                          <span>Simulation</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={7}
                          />
                          <span>Puzzle</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={11}
                          />
                          <span>Arcade</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={83}
                          />
                          <span>Platformer</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={1}
                          />
                          <span>Racing</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={15}
                          />
                          <span>Sports</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={59}
                          />
                          <span>MMORPG</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={6}
                          />
                          <span>Fighting</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={19}
                          />
                          <span>Family</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={28}
                          />
                          <span>Board Games</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={34}
                          />
                          <span>Educational</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, genres, setGenres)
                            }
                            value={17}
                          />
                          <span>Card</span>
                        </label>
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
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#desktop input:checkbox:checked").length
                            ? $("#desktop input:checkbox").prop("checked", true)
                            : $("#desktop input:checkbox").prop(
                                "checked",
                                false
                              )
                        }
                      >
                        Desktop
                      </div>
                      <div className="filter-checkboxes" id="desktop">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={4}
                          />
                          <span>PC</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={5}
                          />
                          <span>macOS</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={6}
                          />
                          <span>Linux</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={55}
                          />
                          <span>Classic Macintosh</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#sony input:checkbox:checked").length
                            ? $("#sony input:checkbox").prop("checked", true)
                            : $("#sony input:checkbox").prop("checked", false)
                        }
                      >
                        Sony
                      </div>
                      <div className="filter-checkboxes" id="sony">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={187}
                          />
                          <span>PS5</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={18}
                          />
                          <span>PS4</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={16}
                          />
                          <span>PS3</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={15}
                          />
                          <span>PS2</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={27}
                          />
                          <span>PS1</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={19}
                          />
                          <span>PS Vita</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={17}
                          />
                          <span>PSP</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#nintendo input:checkbox:checked").length
                            ? $("#nintendo input:checkbox").prop(
                                "checked",
                                true
                              )
                            : $("#nintendo input:checkbox").prop(
                                "checked",
                                false
                              )
                        }
                      >
                        Nintendo
                      </div>
                      <div className="filter-checkboxes" id="nintendo">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={7}
                          />
                          <span>Nintendo Switch</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={10}
                          />
                          <span>Wii U</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={11}
                          />
                          <span>Wii</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={105}
                          />
                          <span>Gamecube</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={83}
                          />
                          <span>Nintendo 64</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={79}
                          />
                          <span>SNES</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={49}
                          />
                          <span>NES</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={8}
                          />
                          <span>3DS</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={13}
                          />
                          <span>DSi</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={9}
                          />
                          <span>DS</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={24}
                          />
                          <span>Game Boy Advance</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={43}
                          />
                          <span>Game Boy Color</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={26}
                          />
                          <span>Game Boy</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#microsoft input:checkbox:checked").length
                            ? $("#microsoft input:checkbox").prop(
                                "checked",
                                true
                              )
                            : $("#microsoft input:checkbox").prop(
                                "checked",
                                false
                              )
                        }
                      >
                        Microsoft
                      </div>
                      <div className="filter-checkboxes" id="microsoft">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={186}
                          />
                          <span>Xbox Series S/X</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={1}
                          />
                          <span>Xbox One</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={14}
                          />
                          <span>Xbox 360</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={80}
                          />
                          <span>Xbox</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#sega input:checkbox:checked").length
                            ? $("#sega input:checkbox").prop("checked", true)
                            : $("#sega input:checkbox").prop("checked", false)
                        }
                      >
                        SEGA
                      </div>
                      <div className="filter-checkboxes" id="sega">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={106}
                          />
                          <span>Dreamcast</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={107}
                          />
                          <span>Saturn</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={119}
                          />
                          <span>SEGA CD</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={117}
                          />
                          <span>SEGA 32X</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={167}
                          />
                          <span>Genesis</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={74}
                          />
                          <span>Master System</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={77}
                          />
                          <span>Game Gear</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#mobile input:checkbox:checked").length
                            ? $("#mobile input:checkbox").prop("checked", true)
                            : $("#mobile input:checkbox").prop("checked", false)
                        }
                      >
                        Mobile
                      </div>
                      <div className="filter-checkboxes" id="mobile">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={21}
                          />
                          <span>Android</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={3}
                          />
                          <span>iOS</span>
                        </label>
                      </div>
                      <div
                        className="category-title nes-pointer"
                        onClick={() =>
                          !$("#retro input:checkbox:checked").length
                            ? $("#retro input:checkbox").prop("checked", true)
                            : $("#retro input:checkbox").prop("checked", false)
                        }
                      >
                        Retro
                      </div>
                      <div className="filter-checkboxes" id="retro">
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={166}
                          />
                          <span>Commodore/Amiga</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={111}
                          />
                          <span>3DO</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={12}
                          />
                          <span>Neo Geo</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={112}
                          />
                          <span>Jaguar</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={41}
                          />
                          <span>Apple II</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={28}
                          />
                          <span>Atari 7800</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={31}
                          />
                          <span>Atari 5200</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={23}
                          />
                          <span>Atari 2600</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={22}
                          />
                          <span>Atari Flashback</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={25}
                          />
                          <span>Atari 8-bit</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={34}
                          />
                          <span>Atari ST</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={46}
                          />
                          <span>Atari Lynx</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(
                                e.target.value,
                                platforms,
                                setPlatforms
                              )
                            }
                            value={50}
                          />
                          <span>Atari XEGS</span>
                        </label>
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
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={1}
                          />
                          <span>Steam</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={3}
                          />
                          <span>Playstation Store</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={2}
                          />
                          <span>Xbox Store</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={4}
                          />
                          <span>App Store</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={5}
                          />
                          <span>GOG</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={6}
                          />
                          <span>Nintendo Store</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={7}
                          />
                          <span>Xbox 360 Store</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={8}
                          />
                          <span>Google Play</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={9}
                          />
                          <span>itch.io</span>
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            className="nes-checkbox"
                            onChange={(e) =>
                              handleFilter(e.target.value, stores, setStores)
                            }
                            value={11}
                          />
                          <span>Epic Games</span>
                        </label>
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
