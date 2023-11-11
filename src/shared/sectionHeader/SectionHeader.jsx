import React from "react";

const SectionHeader = ({ title, desc }) => {
  return (
    <div className="py-6 lg:py-12">
      <div
        className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-3"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div>
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-12 h-1 bg-[#17c3b2]"></div>
          <div className="w-2 h-2 bg-[#17c3b2] rounded-full animate-ping"></div>
          <div className="w-12 h-1 bg-[#17c3b2]"></div>
        </div>
        <div>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
