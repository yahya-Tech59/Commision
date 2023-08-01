import React from "react";
import CustomerTable from "../../components/TablePages/CustomerTable /CustomerTable";
import Header from "../../components/Header/Header";
import "./Customer.scss";
import Footer from "../../components/Footer/Footer";

const Customers = () => {
  return (
    <div className="cust">
      <div className="headerr">
        <Header />
        <h2>Customer</h2>
      </div>
      <CustomerTable />
      <Footer />
    </div>
  );
};

export default Customers;
