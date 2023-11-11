import React from "react";
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import avatar from "../../assets/images/avatar1.png";
import bgImg from "../../assets/images/hero-bg3.jpg";

const HomeAbout = () => {
  return (
    <div className="px-8 lg:px-0 py-12 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <div>
          <SectionHeader
            title="Who We Are"
            desc="We are leading healthcare provider."
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div
            className="lg:pr-24"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <h1 className="text-lg lg:text-3xl">
              A hospital is a health care institution providing patient
              treatment with medical.
            </h1>
            <p className="text-sm lg:text-md text-gray-500 py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incidid unt labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamc laboris nisi ut
              aliquip. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incidid unt labore et dolore magna aliqua.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-[#17c3b2]">
                  Dr. C. Smith
                </h1>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
          <div
            className="relative"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <img src={bgImg} alt="bgImg" className="z-10 rounded-md" />
            <div className="w-full h-full bg-[#17c3b2] absolute z-[-1] left-[-22px] top-[20px] opacity-30 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
