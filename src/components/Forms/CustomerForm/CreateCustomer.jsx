import React from "react";
import "./CreateCust.scss";
import {
  customer,
  username,
  busin,
  phone,
  address,
  Description,
  agency,
} from "../../../images/img";

const CreateCustomer = () => {
  return (
    <div className="custForm">
      <div className="Head">
        <img src={customer} />
        <h2>CreateCustomer</h2>
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

        <div className="row">
          <label>Address : </label>
          <img src={address} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Address" />
        </div>

        <div className="row">
          <label>Description : </label>
          <img src={Description} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Description" />
        </div>

        <div className="row">
          <label>Agency : </label>
          <img src={agency} />
          <div className="vertline"></div>
          <input type="text" placeholder="Enter Agency" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default CreateCustomer;
