import "./Header.css";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <header className="top">
      <img className="logo" src={logo} alt="Logo" />
      <nav className="top__nav">
        <a href="#">Home</a>
        <a href="#">Characters</a>
      </nav>
    </header>
  );
}
