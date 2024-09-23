import "../App.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <h1>#VANLIFE</h1>
        </Link>
        <div className="nav">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
    </div>
  );
}
