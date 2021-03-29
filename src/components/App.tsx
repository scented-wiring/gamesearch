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
  const [stores, setStores] = useState([1, 3, 2, 4, 5, 6, 7, 8, 9, 11]);

  useEffect(() => {
    setPage(1);
  }, [resultsPerPage, sortBy, exact]);

  useEffect(() => {
    if (query) {
      setLoad(true);
      axios
        .get(
          `https://api.rawg.io/api/games?key=${
            process.env.REACT_APP_KEY
          }&search=${query}&search_precise=true&search_exact=${exact}&page=${page}&page_size=${resultsPerPage}&ordering=${sortBy}&stores=${stores.toString()}`
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
  }, [query, page, resultsPerPage, sortBy, exact, stores]);

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
