import React from "react";
import "./CreateProduct.scss";
import { product, price, commision } from "../../../images/img";

const CreateProduct = () => {
  return (
    <div className="ProdForm">
      <div className="Head">
        <img src={product} />
        <h2>CreateProduct</h2>
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>ProductName : </label>
          <img src={product} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Product Name" />
        </div>

        <div className="row">
          <label>Price : </label>
          <img src={price} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Price" />
        </div>

        <div className="row">
          <label>Commision : </label>
          <img src={commision} />
          <div className="vertline"></div>
          <input type="text" placeholder="+Enter Commision" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateProduct;
