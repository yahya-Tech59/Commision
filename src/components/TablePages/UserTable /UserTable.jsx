import React, { useState } from "react";
import "./UserTable.scss";
import { Delete, Edit, plus } from "../../../images/img";
import CreateUser from "../../Forms/UserForm /CreateUser";
import EditUser from "../../Forms/UserForm /EditUser";
import Edittuser from "../../../Edit";

const UserTable = () => {
  const [userForm, setUserForm] = useState(false);
  const [Edituser, setEditUser] = useState(false);

  // const Editt = () => {
  //   {
  //     Edituser ? <EditUser /> : false;
  //   }
  // };

  // const UserEdit = () => {
  //   {
  //     Edittuser.map((index) => {
  //       return (
  //         <ul>
  //           <li key={index}>
  //             <Edittuser />
  //           </li>
  //         </ul>
  //       );
  //     });
  //   }
  // };

  return (
    <div className="usercontainer">
      <table>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>

        <tbody>
          <tr className="head">
            <td>1</td>
            <td>Cabdi Xasan</td>
            <td>cabdi@gmail.com</td>
            <button onClick={<Edittuser />}></button>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditUser(!Edituser)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Edituser ? <EditUser /> : false}
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
            <td>Xaayow C/dalle</td>
            <td>xayow@gmail.com</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditUser(!Edituser)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Edituser ? <EditUser /> : false}
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
            <td>zahra omar</td>
            <td>zahra@gmail.com</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditUser(!Edituser)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Edituser ? <EditUser /> : false}
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
            <td>Najmo C/Laahi</td>
            <td>Najma@gmail.com</td>
            <div className="img">
              <div>
                <button className="edit" onClick={() => setEditUser(!Edituser)}>
                  <img src={Edit} className="edit-img" />
                </button>
                {Edituser ? <EditUser /> : false}
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
          <button className="pluss5" onClick={() => setUserForm(!userForm)}>
            <img src={plus} className="plas" />
            <h2>Add User</h2>
          </button>
          {userForm ? <CreateUser /> : false}
        </div>

        {/* <div>
          <button className="edit" onClick={() => setEditUser(!Edituser)}>
            <img src={Edit} />
            <h2>Edit User</h2>
          </button>
          {Edituser ? <EditUser /> : false}
        </div> */}
      </div>
    </div>
  );
};

export default UserTable;
