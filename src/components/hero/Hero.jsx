import React from "react";
import bgImg from "../../assets/images/hero-bg11.jpg";
import PrimaryBtn from "../../utils/PrimaryBtn/PrimaryBtn";
import AppointmentForm from "../apointmentForm/AppointmentForm";

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={divStyle} className="px-8 lg:px-0">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-2 py-12 lg:py-32">
        <div>
          <h1 className="text-3xl lg:text-6xl">
            Always Laugh <br /> When you Can.
          </h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur mag. Tempor incididunt ut
            labore et dolore elit.
          </p>
          <PrimaryBtn text="Get Started" />
        </div>
        <div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
