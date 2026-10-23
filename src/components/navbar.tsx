import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation();
    const [theme, setTheme] = useState<'dark' | 'light'>(() => {
      if (typeof document !== 'undefined') {
        const current = document.documentElement.getAttribute('data-theme');
        if (current === 'light' || current === 'dark') return current;
      }
      return 'dark';
    });

    useEffect(() => {
      document.documentElement.setAttribute('data-theme', theme);
      try {
        localStorage.setItem('theme', theme);
      } catch (e) {}
    }, [theme]);

    const toggleTheme = () => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
      <>
        <header>
          <nav aria-label="Primary navigation">
            <div>
              <Link to="/">
                <span className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>About</span>
              </Link>
              <Link to="/project">
                <span className={`nav-link ${location.pathname === '/project' ? 'active' : ''}`}>Projects</span>
              </Link>
              <Link to="/resume">
                <span className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</span>
              </Link>
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
              </button>
            </div>
          </nav>
        </header>
      </>
    );
  }
