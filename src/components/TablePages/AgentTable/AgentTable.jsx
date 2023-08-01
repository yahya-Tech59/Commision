import React, { useState } from "react";
import "./AgentTable.scss";
import { Delete, Edit, plus } from "../../../images/img";
import CreateAgent from "../../Forms/AgentsForm/CreateAgent";
import EditAgent from "../../Forms/AgentsForm/EditAgent";

const AgentTable = () => {
  const [agentForm, setAgentForm] = useState(false);
  const [Editagent, setEditAgent] = useState(false);

  return (
    <div className="container">
      <table>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Business</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>

        <tbody>
          <tr className="head">
            <td>1</td>
            <td>Legend</td>
            <td>Adidas</td>
            <td>(252)463-756</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditAgent(!Editagent)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editagent ? <EditAgent /> : false}
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
            <td>(252)463-756</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditAgent(!Editagent)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editagent ? <EditAgent /> : false}
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
            <td>(252)463-756</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditAgent(!Editagent)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editagent ? <EditAgent /> : false}
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
            <td>(252)463-756</td>
            <div className="img">
              <div>
                <button
                  className="edit"
                  onClick={() => setEditAgent(!Editagent)}
                >
                  <img src={Edit} className="edit-img" />
                </button>
                {Editagent ? <EditAgent /> : false}
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
          <button className="pluss" onClick={() => setAgentForm(!agentForm)}>
            <img src={plus} className="plas" />
            <h2>Add Agency</h2>
          </button>
          {agentForm ? <CreateAgent /> : false}
        </div>

        {/* <div>
          <button
            className="edit onclick"
            onClick={() => setEditAgent(!EditAgen)}
          >
            <img src={Edit} />
            <h2>Edit Agency</h2>
          </button>
          {EditAgen ? <EditAgent /> : false}
        </div> */}
      </div>
    </div>
  );
};

export default AgentTable;
