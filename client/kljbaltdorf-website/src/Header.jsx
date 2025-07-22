import { Link } from "react-router-dom";
import "./Header.css"


function Header() {
    return (
      <header className="header">
        <h1>KLJB Altdorf</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ueber">Über uns</Link>
            </li>
            <li>
              <Link to="/mitglied-werden">Mitglied werden</Link>
            </li>
            <li>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;
