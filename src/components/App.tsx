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
  const [data, setData] = useState<Data>({ count: 0, results: [] });

  return (
    <div className="App">
      <Header />
      <SearchBar setData={setData} />
      {data.count > 0 && <SearchResults data={data} />}
    </div>
  );
};

export default App;
