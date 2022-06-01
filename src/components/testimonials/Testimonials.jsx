import React from "react";
import "./Testimonials.scss";
import arrow from "../../assets/arrow-ight.png";
import man from "../../assets/man.png";
const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom joe",
      title: "Co-Founder of DELKA",
      img: { man },
      // icon: "../../assets/linkdin.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu ",
    },
    {
      id: 2,
      name: "Behrooz",
      title: "Jounior Frontend",
      img: { man },
      // icon: "../../assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu  consectetur adipisicing elit. Cumqu ",
      featured: true,
    },
    {
      id: 3,
      name: "Hamid",
      title: "Seniour Developer",
      img: "../../assets/man.png",
      // icon: "../../assets/twiiter.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumqu ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? 'card featured' :'card'} key={d.id}>
            <div className="top">
              <img src={arrow} alt="" className="left" />
              <img src={man} alt="" className="user" />
              {/* <img src={d.icon} alt="logo" className="right" /> */}
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
