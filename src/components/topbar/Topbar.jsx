import React from "react";
import "./Topbar.scss";
import { BiUserCircle, BiMailSend } from "react-icons/bi";

const Topbar = () => {
  return (
    <div className="topbar ">
      <div className="wrapper ">
        <div className="left">
          <a href="#intro" className="logo">
            b z.
          </a>
          <div className="itemContainer">
            <BiUserCircle className="icon" />
            <span>+989 222 806 847</span>
          </div>
          <div className="itemContainer">
            <BiMailSend className="icon" />
            <span>behrooz.zendedel1992@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
