import React, { Component } from "react";

export default class ProductItem extends Component {
  renderProducts = () => {
    const productsHtml = this.props.products.map((item) => {
      return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
          <div className="card bg-light">
            <img
              className="card-img-top"
              src={item.img}
              alt="Card img"
              style={{ maxWidth: "100%", height: 250 }}
            />
            <div className="card-body text-center">
              <h4 className="card-title text-center">{item.title}</h4>
              <p className="card-text">{item.desc}</p>
              <a href="/#" className="btn btn-primary">
                Detail
              </a>
              <a href="/#" className="btn btn-danger ml-1">
                Cart
              </a>
            </div>
          </div>
        </div>
      );
    });

    return productsHtml;
  };
  render() {
    return (
      <>
        <h1 className={`text-center ${this.props.title.className}`}>
          {this.props.title.value}
        </h1>
        <div className="row">{this.renderProducts()}</div>
      </>
    );
  }
}
