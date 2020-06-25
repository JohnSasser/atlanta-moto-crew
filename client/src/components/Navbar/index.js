import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// icon
import amcLogo from "../images/amc-logo.png";

const Navbar = (props) => {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        <img
          id="amcIcon"
          className="Icon"
          src={amcLogo}
          alt="atlanta moto crew icon"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/* <li className="nav-item active">
            <Link className="nav-link" to="#">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>*/}
          <li className="nav-item">
            <Link className="nav-link" to="/gallery">
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Shop
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Moto School
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
