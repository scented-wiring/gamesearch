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
  const [reverse, setReverse] = useState(false);
  const [exact, setExact] = useState(false);

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
        sortBy,
        exact
      );
      setLoad(true);
    }
  }, [page, resultsPerPage, sortBy, exact]);

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
        exact={exact}
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
