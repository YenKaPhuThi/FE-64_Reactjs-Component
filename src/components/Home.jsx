import React, { Component } from "react";
import Modal from "./Modal";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "./Carousel";
import ProductList from "./ProductList";

// data
import productData from "../data/productData.json";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {},
    };
  }

  onViewDetail = (productDetail) => {
    this.setState(
      {
        productDetail: productDetail,
      });
  };

  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ProductList
          productData={productData}
          onViewDetail={this.onViewDetail}
        />
        <Footer />
        <Modal productDetail={this.state.productDetail} />
      </div>
    );
  }
}
