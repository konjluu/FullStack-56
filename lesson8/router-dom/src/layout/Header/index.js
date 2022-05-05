import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/">
            <div className="nav-brand">
              <i className="fa fa-github"></i>
              <span>GitHub Finder</span>
            </div>
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/" className="me-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="me-2">
                  Search
                </Link>
              </li>
              <li>
                <Link to="/about" className="me-2">
                  About
                </Link>
                
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
