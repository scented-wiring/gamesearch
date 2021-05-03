import { useState, useEffect } from "react";
import axios from "axios";
// Types
import { Data } from "../types";
// Components
import Header from "./Header";
import Parameters from "./Parameters";
import LoadingBar from "./LoadingBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
// Styling
import "nes.css/css/nes.min.css";
import "../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data>({ count: 0, results: [] });
  const [error, setError] = useState({ active: false, message: "" });
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState("-rating");
  const [reverse, setReverse] = useState(false);
  const [exact, setExact] = useState(false);
  // prettier-ignore
  const [genres, setGenres] = useState([])
  // prettier-ignore
  const [platforms, setPlatforms] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    setPage(1);
  }, [resultsPerPage, sortBy, exact]);

  useEffect(() => {
    if (query) {
      setLoad(true);
      axios
        .get(
          `https://gamesearch-proxy.herokuapp.com/games?query=${query}&exact=${exact}&page=${page}&resultsPerPage=${resultsPerPage}&sortBy=${sortBy}&genres=${genres.toString()}&platforms=${platforms.toString()}&stores=${stores.toString()}`
        )
        .then((response) => {
          setData(response.data);
          if (response.data.count === 0) {
            setData({ count: 0, results: [] });
            setError({ active: true, message: "No results found!" });
          } else {
            setError({ active: false, message: "" });
          }
          setLoad(false);
        })
        .catch(() => {
          setError({ active: true, message: "Couldn't connect to server!" });
          setLoad(false);
          setData({ count: 0, results: [] });
        });
    }
  }, [query, page, resultsPerPage, sortBy, exact, genres, platforms, stores]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        setQuery={setQuery}
        searched={searched}
        setSearched={setSearched}
        setPage={setPage}
      />
      <Parameters
        setResultsPerPage={setResultsPerPage}
        sortBy={sortBy}
        setSortBy={setSortBy}
        reverse={reverse}
        setReverse={setReverse}
        exact={exact}
        setExact={setExact}
        genres={genres}
        setGenres={setGenres}
        platforms={platforms}
        setPlatforms={setPlatforms}
        stores={stores}
        setStores={setStores}
      />
      {load && <LoadingBar />}
      {searched && !load && (
        <SearchResults
          data={data}
          error={error}
          page={page}
          setPage={setPage}
          resultsPerPage={resultsPerPage}
        />
      )}
    </div>
  );
};

export default App;
