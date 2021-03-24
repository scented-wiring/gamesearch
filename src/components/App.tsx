import { useState } from "react";
// Types
import { Data } from "../types";
// Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import "../styles/App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Data>({ count: 0, results: [] });
  const [error, setError] = useState({ active: false, message: "" });
  const [searched, setSearched] = useState(false);
  const [page, setPage] = useState(1);

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
      />
      {searched && (
        <SearchResults
          data={data}
          error={error}
          setPage={setPage}
          query={query}
          setData={setData}
          setError={setError}
          searched={searched}
          setSearched={setSearched}
        />
      )}
    </div>
  );
};

export default App;
