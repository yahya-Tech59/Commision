import React from "react";
import "./RecentAgencies.scss";
import {
  threeblueDots,
  agencies,
  upArrow,
  pic1,
  pic2,
  pic3,
  pic4,
  pic6,
  pic5,
  bluetick,
} from "../../images/img";

const RecentAgencies = () => {
  return (
    <div className="ra">
      <img src={agencies} className="agency" />
      <h2>RecentAgencies</h2>
      <div className="timg">
        <img src={threeblueDots} />
        <img src={upArrow} />
      </div>
      <div className="line"></div>
      <div className="img">
        <img src={pic1} />
        <img src={pic2} />
        <img src={pic3} />
        <img src={pic4} />
        <img src={pic5} />
        <img src={pic6} />
      </div>
      <ul>
        <li>Xaliimo C/kariim</li>
        <li>C/laahi Nuune</li>
        <li>Najax Cali</li>
        <li>Axmed Yoonis</li>
        <li>Faaduma Rashiid</li>
        <li>Bashiir Kulane</li>
      </ul>

      <ul className="bluetick">
        <li>
          <img src={bluetick} />
        </li>
        <li>
          <img src={bluetick} />
        </li>
        <li>
          <img src={bluetick} />
        </li>
        <li>
          <img src={bluetick} />
        </li>
        <li>
          <img src={bluetick} />
        </li>
        <li>
          <img src={bluetick} />
        </li>
      </ul>
    </div>
  );
};

export default RecentAgencies;
