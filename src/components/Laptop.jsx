import React, { Component } from "react";
import LtMacbook from "../assets/images/lt_macbook.png";
import LtRog from "../assets/images/lt_rog.png";
import LtHp from "../assets/images/lt_hp.png";
import LtLenovo from "../assets/images/lt_lenovo.png";

export default class Laptop extends Component {
  render() {
    return (
      <section id="laptop" className=" pt-5 pb-5 bg-light text-dark">
        <div className="container-fluid">
          <h1 className="text-center">BEST LAPTOP</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="card bg-light">
                <img
                  className="card-img-top"
                  src={LtMacbook}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">MACBOOK</h4>
                  <p className="card-text">
                    The MacBook is a brand of notebook computers manufactured by
                    Apple Inc
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger ml-1">
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="card bg-light">
                <img
                  className="card-img-top"
                  src={LtRog}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">ASUS ROG</h4>
                  <p className="card-text">
                    the Asus ROG Strix Flare is the latest addition to Asus'
                    lineup of ROG branded devices
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger ml-1">
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="card bg-light">
                <img
                  className="card-img-top"
                  src={LtHp}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">HP OMEN</h4>
                  <p className="card-text">
                    A young global smartphone brand focusing on introducing
                    perfect sound quality
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger ml-1">
                    Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
              <div className="card bg-light">
                <img
                  className="card-img-top"
                  src={LtLenovo}
                  alt="Card image"
                  style={{ maxWidth: "100%", height: 250 }}
                />
                <div className="card-body text-center">
                  <h4 className="card-title text-center">LENOVO THINKPAD</h4>
                  <p className="card-text">
                    The ThinkPad X1 Carbon is a high-end notebook computer
                    released by Lenovo in 2012
                  </p>
                  <a href="#" className="btn btn-primary">
                    Detail
                  </a>
                  <a href="#" className="btn btn-danger ml-1">
                    Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
