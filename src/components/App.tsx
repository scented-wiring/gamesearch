import { useState } from "react";
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
      />
      <Parameters />
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
        />
      )}
    </div>
  );
};

export default App;
