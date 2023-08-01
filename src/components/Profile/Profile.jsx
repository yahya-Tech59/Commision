import React from "react";
import { admin, user, logout } from "../../images/img";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="logout">
      <img src={admin} className="admin" />
      <h2>Jhony Smith</h2>
      <p>Administrator</p>
      <div className="line"></div>
      <div className="userName">
        <img src={user} />
        <h2>My Profile</h2>
      </div>
      <button>
        <img src={logout} />
        Log Out
      </button>
    </div>
  );
};

export default Profile;
