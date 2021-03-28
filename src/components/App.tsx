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

  useEffect(() => {
    setPage(1);
  }, [resultsPerPage, sortBy, exact]);

  useEffect(() => {
    if (!query) {
      setData({ count: 0, results: [] });
      setError({
        active: true,
        message: "You must enter a query.",
      });
    } else {
      setLoad(true);
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_KEY}&search=${query}&search_precise=true&search_exact=${exact}&page=${page}&page_size=${resultsPerPage}&ordering=${sortBy}`
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
  }, [query, page, resultsPerPage, sortBy, exact]);

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
