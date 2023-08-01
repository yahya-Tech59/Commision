import React from "react";
import "./CustomersEvent.scss";
import { threeDots } from "../../../images/img";

const CustomersEvent = () => {
  return (
    <div className="CustEvent">
      <h2>Customers</h2>
      <img src={threeDots} />
      <p>12,457+</p>
      <button>View All</button>
    </div>
  );
};

export default CustomersEvent;
