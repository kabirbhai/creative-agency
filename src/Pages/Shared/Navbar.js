import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav
        style={{
          fontFamily: "'Roboto Slab', serif",
        }}
        className="navbar navbar-expand-lg bg-primary"
      >
        <div className="container d-flex justify-content-between  ">
          <a className="navbar-brand" href="/">
            <img width={80} src={logo} alt="logo" />
          </a>

          <div>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link text-light active fs-6 "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/portfolio"
                  className="nav-link text-light active fs-6 "
                >
                  Our portfolio
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/ourTeam"
                  className="nav-link text-light active fs-6 "
                >
                  Our Team
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  to="/contactUs"
                  className="nav-link text-light active fs-6 "
                >
                  Contact us
                </Link>
              </li>
              <button className="btn btn-outline-info">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
