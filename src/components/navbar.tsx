import { Link } from "react-router-dom";

export function Navbar() {
    return (
      <>
        <header>
          <nav>
            <div>
              <Link to="/">
                <span className="nav-link">About</span>
              </Link>
              <Link to="/project">
                <span className="nav-link">Projects</span>
              </Link>
              <Link to="/resume">
                <span className ="nav-link">Resume</span>
              </Link>
            </div>
          </nav>
        </header>
      </>
    );
  }