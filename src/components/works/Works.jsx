import React, { useState } from "react";
import "./Works.scss";
import arow from "../../assets/arrow.png";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,

      title: "branding",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat nis",
      img: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      icon: "../../assets/6.png",
      title: "mobile application",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat nis",
      img: "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    },
    {
      id: 3,

      title: "web design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat nis",
      img: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer"></div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src={arow}
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src={arow}
        alt=""
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
