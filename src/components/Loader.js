import React from "react";
import "../components/Loader.css";
import logo from "../assets/logo.png"; // <- your actual logo

const Loader = () => {
  const text = "Value Invest Zone";

  return (
    <div className="loader-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="loader-text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="loader-letter"
            style={{ "--i": index }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="progress-bar">
        <div className="progress" />
      </div>
    </div>
  );
};

export default Loader;
