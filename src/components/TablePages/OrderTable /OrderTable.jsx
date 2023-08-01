import React, { useState } from "react";
import "./OrderTable.scss";
import { Delete, Edit, plus } from "../../../images/img";
import CreateOrder from "../../Forms/OrderForm /CreateOrder";
import EditOrder from "../../Forms/OrderForm /EditOrder";

const OrderTable = () => {
  const [orderForm, setOrderForm] = useState(false);
  const [Editorder, setEditOrder] = useState(false);

  return (
    <div className="ordcontainer">
      <table>
        <tr>
          <th>No</th>
          <th>Product</th>
          <th>Customer</th>
          <th>Agency</th>
          <th>Amount</th>
          <th>Description</th>
          <th>status</th>
          <th>Action</th>
        </tr>

        <tbody>
          <tr className="head">
            <td>1</td>
            <td>ETC</td>
            <td>Adidas</td>
            <td>252263-756</td>
            <td>Account-medium</td>
            <td>Something-ETC</td>
            <td>Paid</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditOrder(!Editorder)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editorder ? <EditOrder /> : false}
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
            <td>ETC</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Something-ETC</td>
            <td>Paid</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditOrder(!Editorder)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editorder ? <EditOrder /> : false}
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
            <td>ETC</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Something-ETC</td>
            <td>UnPaid</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditOrder(!Editorder)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editorder ? <EditOrder /> : false}
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
            <td>ETC</td>
            <td>Adidas</td>
            <td>252463-756</td>
            <td>Account-medium</td>
            <td>Something-ETC</td>
            <td>Paid</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditOrder(!Editorder)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editorder ? <EditOrder /> : false}
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
          <button className="pluss3" onClick={() => setOrderForm(!orderForm)}>
            <img src={plus} className="plas" />
            <h2>Add Order</h2>
          </button>

          {orderForm ? <CreateOrder /> : false}
        </div>

        {/* <div>
          <button className="edit" onClick={() => setEditOrder(!Editorder)}>
            <img src={Edit} />
            <h2>Edit Order</h2>
          </button>
          {Editorder ? <EditOrder /> : false}
        </div> */}
      </div>
    </div>
  );
};

export default OrderTable;
