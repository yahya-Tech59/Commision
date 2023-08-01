import React from "react";
import "./ProductsEvent.scss";
import { threeDots } from "../../../images/img";

const ProductsEvent = () => {
  return (
    <div className="ProdEvent">
      <h2>Products</h2>
      <img src={threeDots} />
      <p>27</p>
      <button>View All</button>
    </div>
  );
};

export default ProductsEvent;
