import "nes.css/css/nes.min.css";
import "../styles/Searchbar.css";

const Searchbar = () => {
  return (
    <div className="Searchbar">
      <div className="nes-field">
        <input
          type="text"
          id="search_field"
          className="nes-input"
          placeholder="Enter query"
        />
      </div>
    </div>
  );
};

export default Searchbar;
