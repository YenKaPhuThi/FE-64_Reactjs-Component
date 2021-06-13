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
      <section id="carousel" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#carousel" data-slide-to={0} className="active" />
          <li data-target="#carousel" data-slide-to={1} />
          <li data-target="#carousel" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SlideFirst} alt="Los Angeles" />
          </div>
          <div className="carousel-item">
            <img src={SlideSecond} alt="Chicago" />
          </div>
          <div className="carousel-item">
            <img src={SlideThird} alt="New York" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carousel" data-slide="prev">
          <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#carousel" data-slide="next">
          <span className="carousel-control-next-icon" />
        </a>
      </section>
    );
  }
}
