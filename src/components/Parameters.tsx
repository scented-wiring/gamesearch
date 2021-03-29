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
  genres,
  setGenres,
  platforms,
  setPlatforms,
  stores,
  setStores,
}) => {
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
                <p className="title">Filter genres</p>
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
                <p className="title">Filter platforms</p>
                <menu className="dialog-menu">
                  <div className="category-title">Desktop</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={55}
                      />
                      <span>Classic Macintosh</span>
                    </label>
                  </div>
                  <div className="category-title">Sony</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={17}
                      />
                      <span>PSP</span>
                    </label>
                  </div>
                  <div className="category-title">Nintendo</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={26}
                      />
                      <span>Game Boy</span>
                    </label>
                  </div>
                  <div className="category-title">Microsoft</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={80}
                      />
                      <span>Xbox</span>
                    </label>
                  </div>
                  <div className="category-title">SEGA</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={77}
                      />
                      <span>Game Gear</span>
                    </label>
                  </div>
                  <div className="category-title">Mobile</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
                        }
                        value={3}
                      />
                      <span>iOS</span>
                    </label>
                  </div>
                  <div className="category-title">Retro</div>
                  <div className="filter-checkboxes">
                    <label>
                      <input
                        type="checkbox"
                        className="nes-checkbox"
                        onChange={(e) =>
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                          handleFilter(e.target.value, platforms, setPlatforms)
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
                <p className="title">Filter stores</p>
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
    </div>
  );
};

export default Parameters;
