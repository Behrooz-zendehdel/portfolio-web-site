import React from "react";
import "./Intro.scss";
import man from "../../assets/man.png";
import down from "../../assets/arrow.png";

const Intro = () => {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There , I'm</h2>
          <h1>Behrooz zendedel</h1>
          <h3>
            Frontend <span>Developer</span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={down} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
