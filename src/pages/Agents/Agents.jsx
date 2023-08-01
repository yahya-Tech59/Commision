import React from "react";
import AgentTable from "../../components/TablePages/AgentTable/AgentTable";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Agents.scss";

const Agents = () => {
  return (
    <div className="agent">
      <div className="headerr">
        <Header />
        <h2>Agent</h2>
      </div>
      <AgentTable />
      <Footer />
    </div>
  );
};

export default Agents;
