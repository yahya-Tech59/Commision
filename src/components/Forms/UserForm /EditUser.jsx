import React from "react";
import "./CreateUser.scss";
import { Edit, user, message, password } from "../../../images/img";

const EditUser = () => {
  return (
    <div className="userForm">
      <div className="Head">
        <img src={Edit} className="Edit" />
        <h2>EditUser</h2>
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>FullName : </label>
          <img src={user} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter FullName" />
        </div>

        <div className="row">
          <label>Email : </label>
          <img src={message} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Email" />
        </div>

        <div className="row">
          <label>Password : </label>
          <img src={password} />
          <div className="vertline"></div>
          <input type="text" placeholder="+Enter Password" />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
};

export default EditUser;
