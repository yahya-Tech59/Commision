import React from "react";
import "./CreateOrder.scss";
import {
  orderCart,
  product,
  user,
  agency,
  price,
  Description,
} from "../../../images/img";

const CreateOrder = () => {
  return (
    <div className="OrForm">
      <div className="Head">
        <img src={orderCart} />
        <h2>CreateOrder</h2>
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
          <label>Customer : </label>
          <img src={user} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Customer" />
        </div>

        <div className="row">
          <label>Agency : </label>
          <img src={agency} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Agency" />
        </div>

        <div className="row">
          <label>Amount : </label>
          <img src={price} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Amount" />
        </div>

        <div className="row">
          <label>Description : </label>
          <img src={Description} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Description" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateOrder;
