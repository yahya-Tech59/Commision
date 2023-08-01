import React, { useState } from "react";
import { admin, search } from "../../images/img";
import "./Header.scss";
import Profile from "../Profile/Profile";

const Header = () => {
  const { showProfile, setShowProfile } = useState(false);

  return (
    <div className="headd">
      <div className="input-img">
        <input type="text" placeholder="Search" />
        <img src={search} className="search" alt="" />
      </div>
      <div className="btnImg">
        <img src={admin} className="admin" alt="" />
        <button onClick={() => setShowProfile(!showProfile)}>Admin</button>
        {showProfile ? <Profile /> : null}
      </div>
    </div>
  );
};

export default Header;
