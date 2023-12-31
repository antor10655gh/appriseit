import React from "react";
import { SiAsciidoctor } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { LuSiren } from "react-icons/lu";

const HomeServices = () => {
  const services = [
    {
      id: 1,
      icon: <SiAsciidoctor className="h-8 w-8 text-white" />,
      title: "Qualified Doctors",
      desc: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
    },
    {
      id: 2,
      icon: <FiPhoneCall className="h-8 w-8 text-white" />,
      title: "24 Hours Service",
      desc: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
    },
    {
      id: 3,
      icon: <LuSiren className="h-8 w-8 text-white" />,
      title: "Need Emergency",
      desc: "Lorem ipsum dolor sit amet consectet adipis sed do eiusmod tempor inc ididunt utid labore.",
    },
  ];
  return (
    <div className="py-12 lg:py-20">
      <div
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center gap-12"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <div className="h-20 w-20 flex items-center justify-center rounded-full bg-[#17c3b2] text-center">
              {service.icon}
            </div>
            <h1 className="font-bold text-2xl py-3">{service.title}</h1>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeServices;
