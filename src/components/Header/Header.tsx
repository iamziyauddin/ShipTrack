import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          SpaceX Ships Tracker
        </Link>
        <nav>
          <Link to="/" className="nav-link">
            Ships List
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
