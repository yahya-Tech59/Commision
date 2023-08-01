import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FcIcons from "react-icons/fc";
import * as BsIcons from "react-icons/bs";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link to="/dashboard" className="items">
          <h2>Dashboard</h2>
          <AiIcons.AiOutlineDashboard className="icons" />
        </Link>
        <Link to="/agents" className="items">
          <h2>Agents</h2>
          <MdIcons.MdOutlineSupportAgent className="icons" />
        </Link>
        <Link to="/customers" className="items">
          <h2>Customers</h2>
          <FcIcons.FcCustomerSupport className="icons" />
        </Link>
        <Link to="/products" className="items">
          <h2>Products</h2>
          <BsIcons.BsMinecartLoaded className="icons" />
        </Link>
        <Link to="/orders" className="items">
          <h2>Orders</h2>
          <BsIcons.BsCart4 className="icons" />
        </Link>
        <Link to="/users" className="items">
          <h2>Users</h2>
          <FaIcons.FaUsersCog className="icons" />
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
