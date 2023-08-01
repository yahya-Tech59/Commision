import React from "react";
import "./ChangePassFromUser.scss";
import { admin, user, password } from "../../../images/img";

const ChangePassFromUser = () => {
  return (
    <div className="cpForm">
      <div className="Head">
        <img src={admin} className="edit" />
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>Name : </label>
          <img src={user} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Old Password" />
        </div>

        <div className="row">
          <label>Email : </label>
          <img src={password} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Email" />
        </div>
        <button>ChangePassword</button>
      </form>
    </div>
  );
};

export default ChangePassFromUser;
