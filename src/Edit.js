import React, { useState } from "react";
import { Edit, Delete } from "./images/img";
import EditUser from "./components/Forms/UserForm /EditUser";

const Edittuser = () => {
  const [Edituser, setEditUser] = useState(false);

  return (
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
  );
};

export default Edittuser;
