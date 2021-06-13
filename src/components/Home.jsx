import React, { Component } from "react";
import Carousel from "./Carousel";
import ProductList from "./ProductList";
import Header from "./Header";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ProductList />
        <Footer />
      </div>
    );
  }
}
