import { useState } from "react";

// Components
import Header from "../components/Header";
import SearchBar from "../components/Searchbar";

import "../styles/App.css";

const App = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchBar setResults={setResults} />
    </div>
  );
};

export default App;
