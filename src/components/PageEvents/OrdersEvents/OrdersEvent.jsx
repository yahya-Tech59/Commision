import React from "react";
import "./OrdersEvent.scss";
import { threeDots } from "../../../images/img";

const OrdersEvent = () => {
  return (
    <div className="OrdersEvent">
      <h2>Orders</h2>
      <img src={threeDots} />
      <p>$500</p>
      <button>View All</button>
    </div>
  );
};

export default OrdersEvent;
