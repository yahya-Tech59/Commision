import React, { useState } from "react";
import AgentsEvent from "../../components/PageEvents/AgentsEvent/AgentsEvent";
import CustomersEvent from "../../components/PageEvents/CustomersEvent/CustomersEvent";
import OrdersEvent from "../../components/PageEvents/OrdersEvents/OrdersEvent";
import ProductsEvent from "../../components/PageEvents/ProductsEvent/ProductsEvent";
import Header from "../../components/Header/Header";
import BlueChart from "../../components/chart/Bluechart";
import RecentAgencies from "../../components/RecentAgencies/RecentAgencies";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dash">
      <div className="headerr">
        <Header />
        <h2>Dashboard</h2>
      </div>
      <div className="dhas">
        <div className="pagevents">
          <AgentsEvent />
          <CustomersEvent />
          <OrdersEvent />
          <ProductsEvent />
        </div>

        <div>
          <BlueChart />
          <RecentAgencies />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
