import React, { Component } from "react";

// Componnets
import ProductItem from "./ProductItem";

// smartphone images
import SpIphoneX from "../assets/images/sp_iphoneX.png";
import SpNote7 from "../assets/images/sp_note7.png";
import SpVivo850 from "../assets/images/sp_vivo850.png";
import SpBlackberry from "../assets/images/sp_blackberry.png";

// Laptop images
import LtMacbook from "../assets/images/lt_macbook.png";
import LtRog from "../assets/images/lt_rog.png";
import LtHp from "../assets/images/lt_hp.png";
import LtLenovo from "../assets/images/lt_lenovo.png";

export default class ProductList extends Component {
  titleSp = {
    value: "BEST SMARTPHONE",
    className: "text-white",
  };

  titleLt = {
    value: "BEST LAPTOP",
    className: "",
  };

  smartPhone = [
    {
      id: "sp_1",
      img: SpIphoneX,
      title: "iPhone X",
      desc: "iPhone X features a new all-screen design. Fac ID, which makes your face your password",
    },
    {
      id: "sp_2",
      img: SpNote7,
      title: "Galaxy Note7",
      desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
    },
    {
      id: "sp_3",
      img: SpVivo850,
      title: "Vivo",
      desc: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "sp_4",
      img: SpBlackberry,
      title: "Blackberry",
      desc: "BlackBerry is a line of smartphones, tablets, and services originally designed",
    },
  ];

  laptop = [
    {
      id: "lt_1",
      img: LtMacbook,
      title: "MACBOOK",
      desc: "The MacBook is a brand of notebook computers manufactured by Apple Inc",
    },
    {
      id: "lt_2",
      img: LtRog,
      title: "ASUS ROG",
      desc: "the Asus ROG Strix Flare is the latest addition to Asus' lineup of ROG branded devices",
    },
    {
      id: "lt_3",
      img: LtHp,
      title: "HP OMEN",
      desc: "A young global smartphone brand focusing on introducing perfect sound quality",
    },
    {
      id: "lt_4",
      img: LtLenovo,
      title: "LENOVO THINKPAD",
      desc: "The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012",
    },
  ];

  render() {
    return (
      <section id="productList">
        <div className="pt-5 pb-5">
          <div className="container-fluid">
            <ProductItem title={this.titleSp} products={this.smartPhone} />
          </div>
        </div>
        <div className="pt-5 pb-5 bg-light text-dark">
          <div className="container-fluid">
            <ProductItem title={this.titleLt} products={this.laptop} />
          </div>
        </div>
      </section>
    );
  }
}
