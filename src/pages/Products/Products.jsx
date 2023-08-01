import React, { useState } from "react";
import ProductTable from "../../components/TablePages/ProductTable /ProductTable";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Products.scss";

const Products = () => {
  return (
    <div className="prod">
      <div className="headerr">
        <Header />
        <h2>Products</h2>
      </div>
      <ProductTable />
      <Footer />
    </div>
  );
};

export default Products;
