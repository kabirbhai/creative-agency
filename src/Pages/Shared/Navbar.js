import React from "react";
import logo from "../../images/logos/logo.png";

const Navbar = () => {
  return (
    <header>
      <nav
        style={{
          fontFamily: "'Roboto Slab', serif",
        }}
        className="navbar navbar-expand-lg "
      >
        <div className="container d-flex justify-content-between  ">
          <a className="navbar-brand" href="/">
            <img width={80} src={logo} alt="logo" />
          </a>

          <div>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active fs-6 fw-bolder"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active fs-6 fw-bolder" href="/">
                  Our portfolio
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active fs-6 fw-bolder" href="/">
                  Our Team
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active fs-6 fw-bolder" href="/">
                  Contact us
                </a>
              </li>
              <button className="btn btn-outline-primary">Login</button>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
