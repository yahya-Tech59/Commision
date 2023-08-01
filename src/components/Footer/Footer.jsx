import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <h2>Showing 1 to 7 of 599 entries</h2>
      <div className="btns">
        <button>Previous</button>
        <button className="blu">1</button>
        <button>2</button>
        <button>3</button>
        <button>...</button>
        <button>100</button>
        <button>Next</button>
      </div>

      <h2 className="foot">
        <span>C</span> CawaaleICT 2023
      </h2>
    </div>
  );
};

export default Footer;
