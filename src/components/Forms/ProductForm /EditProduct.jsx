import React from "react";
import "./CreateProduct.scss";
import { Edit, product, price, commision } from "../../../images/img";

const EditProduct = () => {
  return (
    <div className="ProdForm">
      <div className="Head">
        <img src={Edit} className="Edit" />
        <h2>EditProduct</h2>
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
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditProduct;
