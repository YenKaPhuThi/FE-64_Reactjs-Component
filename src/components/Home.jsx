import React, { Component } from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import Navbar from "./Navbar";
import Promotion from "./Promotion";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Navbar />
        <Carousel />
        <Content />
        <Promotion />
      </div>
    );
  }
}
