import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* Placeholder for your logo */}
        <img src="/path/to/your/logo" alt="Logo" />
      </div>

      <nav className="h-16 flex justify-center items-center">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/leistungen">Leistungen</NavLink>
          </li>
          <li>
            <NavLink to="/impressium">Impressium</NavLink>
          </li>
          <li>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
