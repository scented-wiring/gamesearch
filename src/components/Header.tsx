import "nes.css/css/nes.min.css";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="nes-container is-rounded is-dark">
        <div className="Title">
          <h1>Gamesearch</h1>
          <i className="nes-icon coin is-medium"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
