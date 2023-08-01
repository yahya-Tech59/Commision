import React from "react";
import "./Bluechart.scss";

const BlueChart = () => {
  return (
    <div className="blue">
      <h2>Total Commission</h2>
      <div className="border">
        <ul>
          <li>500</li>
          <li>460</li>
          <li>420</li>
          <li>380</li>
          <li>340</li>
          <li>300</li>
          <li>240</li>
          <li>200</li>
          <li>160</li>
          <li>120</li>
          <li>80</li>
          <li>40</li>
        </ul>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>

        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
        <div className="vert-line"></div>
      </div>
      <div className="months">
        <ul>
          <li>Jan</li>
          <li>Feb</li>
          <li>Mar</li>
          <li>Apr</li>
          <li>May</li>
          <li>June</li>
          <li>Jully</li>
          <li>Aug</li>
          <li>Sep</li>
          <li>Oct</li>
          <li>Nov</li>
          <li>dec</li>
        </ul>
      </div>
    </div>
  );
};

export default BlueChart;
