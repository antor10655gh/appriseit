import React from "react";
import "./PrimaryBtn.css";

const PrimaryBtn = ({ text }) => {
  return (
    <button className="primaryBtn" data-aos="fade-up" data-aos-duration="3000">
      {text}
    </button>
  );
};

export default PrimaryBtn;
