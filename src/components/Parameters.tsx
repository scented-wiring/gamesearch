import "../styles/Parameters.css";

const Parameters = () => {
  return (
    <div className="Parameters">
      <div className="nes-container with-title is-centered">
        <p className="title">Search parameters</p>
        <div className="params">
          <div className="param">
            <label htmlFor="default_select">Results per page:</label>
            <div className="nes-select">
              <select required id="default_select">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
            </div>
          </div>
          <div className="param">
            <label htmlFor="default_select">Sort by:</label>
            <div className="nes-select">
              <select required id="default_select">
                <option value="Name">Name</option>
                <option value="Released">Released</option>
                <option value="Released">Metacritic Rating</option>
              </select>
            </div>
          </div>
          <div className="param">
            <label htmlFor="default_select">Order:</label>
            <div className="nes-select">
              <select required id="default_select">
                <option value="Name">Ascending</option>
                <option value="Released">Descending</option>
              </select>
            </div>
          </div>
          <div className="checkboxes">
            <label>
              <input type="checkbox" className="nes-checkbox" />
              <span>Match exact query</span>
            </label>
            <label>
              <input type="checkbox" className="nes-checkbox" />
              <span>Exclude obscure results</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parameters;
