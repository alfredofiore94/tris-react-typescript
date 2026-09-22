import { Link } from "react-router";
import "./navigation-bar.css";

export function NavigationBar() {
  return (
    <header>
      <div className="navbar bg-base-100 shadow-sm">
        <Link to="/" className="btn btn-ghost text-xl">
          Gioco
        </Link>
        <Link to="/game-results" className="btn btn-ghost text-xl">
          Risultati
        </Link>
        <Link to="/players" className="btn btn-ghost text-xl">
          Giocatori
        </Link>
      </div>
    </header>
  );
}
