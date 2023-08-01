import React from "react";
import "./sidebar.scss";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="sidebar">
      Agency Management <br /> <span>System</span>
      <div className="links">
        <ul className="sidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                <div>{val.icon}</div>
                <div>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
