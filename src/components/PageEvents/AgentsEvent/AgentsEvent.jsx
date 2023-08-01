import React from "react";
import "./AgentsEvent.scss";
import { threeDots } from "../../../images/img";

const AgentsEvent = () => {
  return (
    <div className="agentEvent">
      <h2>Agent</h2>
      <img src={threeDots} />
      <p>5,000+</p>
      <button>View All</button>
    </div>
  );
};

export default AgentsEvent;
