import React from "react";
import "./Whatsapp.css";

const Whatsapp = () => {
  return (
    // <a href="https://www.freepik.com/"><a/>
    <div className="whatsapp-wrappper">
      <a
        href="https://wa.me/918285607962?text=Hello, How may I help you ?"
        target="_blank"
        // rel="noopener noreferrer"
      >
        <img src="/images/whatsapp.png" alt="" srcSet="" />
      </a>
    </div>
  );
};

export default Whatsapp;
