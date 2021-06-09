import React, { Component } from "react";

// css
import "../assets/css/components/Carousel.css";

// images
import SlideFirst from "../assets/images/slide_1.jpg";
import SlideSecond from "../assets/images/slide_2.jpg";
import SlideThird from "../assets/images/slide_3.jpg";

export default class Carousel extends Component {
  render() {
    return (
      <div id="demo" className="carousel slide" data-ride="carousel">
        {/* Indicators */}
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to={0} className="active" />
          <li data-target="#demo" data-slide-to={1} />
          <li data-target="#demo" data-slide-to={2} />
        </ul>
        {/* The slideshow */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SlideFirst} alt="Los Angeles" width={1100} height={500} />
          </div>
          <div className="carousel-item">
            <img src={SlideSecond} alt="Chicago" width={1100} height={500} />
          </div>
          <div className="carousel-item">
            <img src={SlideThird} alt="New York" width={1100} height={500} />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    );
  }
}
