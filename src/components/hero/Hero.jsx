import React from "react";
import bgImg from "../../assets/images/hero-bg11.jpg";
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
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-0 py-12 lg:py-32">
        <div>
          <h1
            className="text-3xl lg:text-6xl lg:leading-[65px] font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Always Laugh <br /> When you Can.
          </h1>
          <p className="py-3" data-aos="fade-up" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur mag. Tempor incididunt ut
            labore et dolore elit.
          </p>
          <button className="bg-[#17C3B2] text-white min-w-[250px] mx-auto mt-4 py-2 px-4 rounded-md hover:opacity-80 transition duration-300">
            Get Started
          </button>
        </div>
        <div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
