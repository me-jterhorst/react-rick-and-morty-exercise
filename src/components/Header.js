import "./Header.css";
import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="top">
      <img className="logo" src={logo} alt="Logo" />
      <nav className="top__nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/characters">Characters</NavLink>
      </nav>
    </header>
  );
}
