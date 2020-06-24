import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = (props) => {

  return (
    <div className="pos-f-t fixed-bottom footer">
      <div className="navbar d-flex justify-content-around">
        <div className="nav-item">
          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="https://www.facebook.com/groups/410602366078390/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook-official fa-lg"></i>
          </a>

          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="https://www.instagram.com/atlantamotocrew/"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-instagram fa-lg"></i>
          </a>

          <a
            className="navbar-brand btn btn-social-icon btn-twitter"
            href="https://www.youtube.com/channel/UCqa0s82esn3Xddq-zFAumgw?view_as=subscriber"
            target="blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-youtube fa-lg"></i>
          </a>
          <Link
            className="navbar-brand btn btn-social-icon btn-twitter justify-self-right"
            to="/contact"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope fa-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
