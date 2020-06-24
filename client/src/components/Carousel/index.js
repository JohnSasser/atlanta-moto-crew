import React from "react";

// STYLE
import "./style.css";

// CAROUSEL IMAGES
import jakeFlagpole from "../images/jake.flagpole-min.jpeg";
import ronniePensive from "../images/ronnie-min.jpg";
import lineUpGroup1 from "../images/lineup.group1-min.jpg";

const Carousel = (props) => {
  return (
    <div className="container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={jakeFlagpole} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ronniePensive} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={lineUpGroup1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
