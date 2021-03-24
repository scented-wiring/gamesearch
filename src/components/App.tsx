// Dependencies
import { useState } from "react";
// Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import "../styles/App.css";

export type Game = {
  name: string;
  background_image: string;
  platforms: {
    platform: {
      name: string;
    };
  }[];
  genres: {
    name: string;
  }[];
  released: string;
  metacritic: number;
};

export type Data = {
  count: number;
  results: Game[];
};

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
