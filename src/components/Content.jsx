import React, { Component } from "react";
import Laptop from "./Laptop";
import SmartPhone from "./SmartPhone";

export default class Content extends Component {
  render() {
    return (
      <>
        <SmartPhone />
        <Laptop />
      </>
    );
  }
}
