import React from "react";
import OrderTable from "../../components/TablePages/OrderTable /OrderTable";
import Header from "../../components/Header/Header";
import "./Orders.scss";
import Footer from "../../components/Footer/Footer";

const Orders = () => {
  return (
    <div className="order">
      <div className="headerr">
        <Header />
        <h2>Order</h2>
      </div>
      <OrderTable />
      <Footer />
    </div>
  );
};

export default Orders;
