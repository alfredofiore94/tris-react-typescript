import { Link } from "react-router";
import "./navigation-bar.css";

export function NavigationBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link nav-link-customize" to="/">
                  Gioco
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className=" nav-link nav-link-customize"
                  to="/game-results"
                >
                  Risultati
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
