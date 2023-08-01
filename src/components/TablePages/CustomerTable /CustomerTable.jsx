import React, { useState } from "react";
import "./CustomerTable.scss";
import { Delete, Edit, plus } from "../../../images/img";
import CreateCustomer from "../../Forms/CustomerForm/CreateCustomer";
import EditCust from "../../Forms/CustomerForm/EditCust";

const CustomerTable = () => {
  const [custForm, setCustForm] = useState(false);
  const [Editcust, setEditCust] = useState(false);

  return (
    <div className="cuscontainer">
      <table>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Description</th>
          <th>Agency</th>
          <th>Action</th>
        </tr>

        <tbody>
          <tr className="head">
            <td>1</td>
            <td>Legend</td>
            <td>Adidas</td>
            <td>252263-756</td>
            <td>Account-medium</td>
            <td>Cawaale-ICT</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditCust(!Editcust)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Editcust ? <EditCust /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>2</td>
            <td>Winner</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Cawaale-ICT</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditCust(!Editcust)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Editcust ? <EditCust /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>3</td>
            <td>professor</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Cawaale-ICT</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditCust(!Editcust)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Editcust ? <EditCust /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>

          <tr className="head">
            <td>4</td>
            <td>john</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Cawaale-ICT</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditCust(!Editcust)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Editcust ? <EditCust /> : false}
              </div>
              <div>
                <button className="delete">
                  <img src={Delete} className="del" />
                </button>
              </div>
            </div>
          </tr>
        </tbody>
      </table>

      <div>
        <div>
          <button className="pluss2" onClick={() => setCustForm(!custForm)}>
            <img src={plus} className="plas" />
            <h2>Add Customer</h2>
          </button>

          {custForm ? <CreateCustomer /> : false}
        </div>

        {/* <div>
          <button className="edit" onClick={() => setEditCust(!Editcust)}>
            <img src={Edit} />
            <h2>Edit Customer</h2>
          </button>
          {Editcust ? <EditCust /> : false}
        </div> */}
      </div>
    </div>
  );
};

export default CustomerTable;
