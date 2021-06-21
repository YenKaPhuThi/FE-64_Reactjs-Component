import React, { Component } from "react";

// Componnets
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  titleSp = {
    value: "BEST SMARTPHONE",
    className: "text-white",
  };

  titleLt = {
    value: "BEST LAPTOP",
    className: "",
  };


  render() {
    const {mobile, laptop} = this.props.productData.products;
    return (
      <section id="productList">
        <div className="pt-5 pb-5">
          <div className="container-fluid">
            <ProductItem title={this.titleSp} products={mobile} />
          </div>
        </div>
        <div className="pt-5 pb-5 bg-light text-dark">
          <div className="container-fluid">
            <ProductItem title={this.titleLt} products={laptop} />
          </div>
        </div>
      </section>
    );
  }
}
