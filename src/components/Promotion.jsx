import React, { Component } from "react";

// images
import PromotionFirst from "../assets/images/promotion_1.png";
import PromotionSecond from "../assets/images/promotion_2.png";
import PromotionThird from "../assets/images/promotion_3.jpg";

export default class Promotion extends Component {
  render() {
    return (
      <section id="promotion" className="pt-5 pb-5">
        <div className="container">
          <h1 className="text-center text-white">PROMOTION</h1>
          <div className="bg-light py-5 px-4">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4">
                <img src={PromotionFirst} alt style={{ maxWidth: "100%" }} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <img src={PromotionSecond} alt style={{ maxWidth: "100%" }} />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-4">
                <img src={PromotionThird} alt style={{ maxWidth: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
