import React, { useState } from "react";
import "./Contact.scss";
import writting from "../../assets/writting.png";
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={writting} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && (
            <span style={{ color: "green" }}>
              thanks, sending message succesfull
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
