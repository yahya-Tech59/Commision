import React from "react";
import UserTable from "../../components/TablePages/UserTable /UserTable";
import Header from "../../components/Header/Header";
import "./Users.scss";
//import ChangePassFromUser from "../../components/Forms/ChangePassFromUser/ChangePassFromUser";
//import ChangePassword from "../../components/Forms/ChangePassword/ChangePassword";
import Footer from "../../components/Footer/Footer";

const Users = () => {
  return (
    <div className="user">
      <div className="headerr">
        <Header />
        <h2>Users</h2>
      </div>
      <UserTable />
      <Footer />
    </div>
  );
};

export default Users;
