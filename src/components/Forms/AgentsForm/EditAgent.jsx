import React from "react";
import "./CreateAgent.scss";
import { Edit, username, busin, phone } from "../../../images/img";

const EditAgent = () => {
  return (
    <div className="AgentForm">
      <div className="Head">
        <img src={Edit} className="Edit" />
        <h2>EditAgent</h2>
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>FullName : </label>
          <img src={username} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Full Name" />
        </div>

        <div className="row">
          <label>Business : </label>
          <img src={busin} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Business Name" />
        </div>

        <div className="row">
          <label>Phone No: </label>
          <img src={phone} />
          <div className="vertline"></div>
          <input type="text" placeholder="+252xxxxxxxxx" />
        </div>
        <button className="btn-update">Update</button>
      </form>
    </div>
  );
};

export default EditAgent;
