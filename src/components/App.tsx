import { useState, useEffect } from "react";
// Types
import { Data } from "../types";
// Components
import Header from "./Header";
import Parameters from "./Parameters";
import LoadingBar from "./LoadingBar";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import "../styles/App.css";
import { search } from "../helpers";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data>({ count: 0, results: [] });
  const [error, setError] = useState({ active: false, message: "" });
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [resultsPerPage, setResultsPerPage] = useState(20);
  const [sortBy, setSortBy] = useState("-rating");

  useEffect(() => {
    if (searched) {
      search(
        query,
        page,
        setData,
        setError,
        searched,
        setSearched,
        setLoad,
        resultsPerPage,
        sortBy
      );
      setLoad(true);
      console.log(resultsPerPage);
    }
  }, [page, resultsPerPage, sortBy]);

  return (
    <div className="App">
      <Header />
      <SearchBar
        query={query}
        setQuery={setQuery}
        setData={setData}
        setError={setError}
        searched={searched}
        setSearched={setSearched}
        page={page}
        setPage={setPage}
        setLoad={setLoad}
        resultsPerPage={resultsPerPage}
        sortBy={sortBy}
      />
      <Parameters setResultsPerPage={setResultsPerPage} setSortBy={setSortBy} />
      {load && <LoadingBar />}
      {searched && !load && (
        <SearchResults
          data={data}
          error={error}
          page={page}
          setPage={setPage}
          query={query}
          setData={setData}
          setError={setError}
          searched={searched}
          setSearched={setSearched}
          setLoad={setLoad}
          resultsPerPage={resultsPerPage}
        />
      )}
    </div>
  );
};

export default App;
