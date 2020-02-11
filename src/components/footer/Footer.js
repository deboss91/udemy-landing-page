import React from "react";
import "./footer/../Footer.css";
import newarrow from "./udemy1.jpg";
import newclock from "./udemy2.jpg";
import check from "./newclock.png";

const Footer = () => {
  return (
    <footer className="foot">
      <div className="cir">
        <img
          className="cirImg"
          src={newarrow}
          width="60px"
          height="50px"
          alt="/"
        />
        <div className="cirDiv">
          <h4 className="cirh4">100,000 online courses</h4>
          <p>explore a variety of fresh topics</p>
        </div>
      </div>

      <div className="com">
        <img
          className="comImg"
          src={newclock}
          width="60px"
          height="50px"
          alt="/"
        />
        <div className="comDiv">
          <h4>expert instruction</h4>
          <p>find the right instructor for you</p>
        </div>
      </div>

      <div className="clo">
        <img
          className="cloImg"
          src={check}
          width="60px"
          height="50px"
          alt="/"
        />
        <div className="cloDiv">
          <h4>life time access</h4>
          <p>learn on your schedule</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
