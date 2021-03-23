import { useState } from "react";

// Components
import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

import "../styles/App.css";

export type Data = {
  count: number;
  results: [];
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
