import React from "react";
import "./ChangePassword.scss";
import { passwordblue, password } from "../../../images/img";

const ChangePassword = () => {
  return (
    <div className="ProdForm">
      <div className="Head">
        <img src={passwordblue} className="edit" />
        <h2>ChangePassword</h2>
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>OldPassword : </label>
          <img src={password} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Old Password" />
        </div>

        <div className="row">
          <label>NewPassword : </label>
          <img src={password} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter NewPassword" />
        </div>

        <div className="row">
          <label>ConfirmPassword : </label>
          <img src={password} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter ConfirmPassword" />
        </div>
        <div className="btns">
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
