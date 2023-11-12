import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import crutchesImg from "../../assets/images/crutches.png";
import xrayImg from "../../assets/images/xray.png";
import pulmonologyImg from "../../assets/images/pulmonary.png";
import cardiologyImg from "../../assets/images/cardiology.png";
import dentistryImg from "../../assets/images/dental-care.png";
import neurologyImg from "../../assets/images/neurology.png";
import crutchesSvg from "../../assets/images/svgs/crutches.svg";
import xraySvg from "../../assets/images/svgs/xray.svg";
import pulmonologySvg from "../../assets/images/svgs/pulmonary.svg";
import cardiologySvg from "../../assets/images/svgs/cardiology.svg";
import dentistrySvg from "../../assets/images/svgs/dental.svg";
import neurologySvg from "../../assets/images/svgs/neurology.svg";

const DepartmentTabs = () => {
  const data = [
    {
      label: "Crutches",
      value: "Crutches",
      img: crutchesImg,
      icon: crutchesSvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      label: "X-Ray",
      value: "x-ray",
      img: xrayImg,
      icon: xraySvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      label: "Pulmonary",
      value: "Pulmonary",
      img: pulmonologyImg,
      icon: pulmonologySvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      label: "Cardiology",
      value: "Cardiology",
      img: cardiologyImg,
      icon: cardiologySvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      label: "Dental Care",
      value: "Dental care",
      img: dentistryImg,
      icon: dentistrySvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      label: "Neurology",
      value: "Neurology",
      img: neurologyImg,
      icon: neurologySvg,
      semiDesc:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nemo libero debitis vitae sapiente quos.",
      desc: "Oillum abrem deleniti adipisci suscipit dignissimos. remaining essentially unchanged. It was popularised in the with the . Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <Tabs value="Crutches" data-aos="fade-up" data-aos-duration="3000">
      <TabsHeader
        className="bg-transparent"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex flex-col items-center gap-3 py-2 cursor-pointer">
              <img src={icon} alt="" className="w-7 h-7 lg:w-12 lg:h-12" />
              <p className="lg:block hidden">{label}</p>
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc, img, semiDesc }) => (
          <TabPanel key={value} value={value}>
            <div className="flex flex-col lg:flex-row items-center py-12 gap-24">
              <div className="w-full lg:w-1/2">
                <img src={img} alt="" />
              </div>
              <div className="w-full lg:w-1/2">
                <h1 className="text-4xl font-bold">
                  Welcome to our <span className="text-[#17C3B2]">{value}</span>
                </h1>
                <p className="py-3 font-bold">{semiDesc}</p>
                <p className="text-gray-500 py-3">{desc}</p>
                <button className="bg-[#17C3B2] text-white min-w-[250px] mx-auto mt-4 py-2 px-4 rounded-md hover:opacity-80 transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
};

export default DepartmentTabs;
