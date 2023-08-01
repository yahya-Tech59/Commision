import React from "react";
import "./CreateAgent.scss";
import { customer, username, busin, phone } from "../../../images/img";

const CreateAgent = () => {
  return (
    <div className="AgentForm">
      <div className="Head">
        <img src={customer} className="custo" />
        <h2>CreateAgent</h2>
      </div>
      <div className="line"></div>

      <form>
        <div className="row">
          <label>FullName : </label>
          <img src={username} className="username" />
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

        <div className="btn">
          <button className="save">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAgent;
