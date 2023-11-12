import React from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import bgImg from "../../assets/images/footer-bg.png";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    id: 1,
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
    url: "https://www.linkedin.com/in/alfaz-ahmed-ba7a811a9/",
  },
  {
    id: 2,
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
    url: "https://github.com/alfaz-ahmed",
  },
  {
    id: 3,
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
    url: "https://www.instagram.com/alfaz_ahmed/",
  },
  {
    id: 4,
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
    url: "https://www.youtube.com/channel/UCf0n-5QI6u4O5uZ7B7OXcQ",
  },
];

const quickLinks1 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];

const quickLinks2 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];

const quickLinks3 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

const divStyle = {
  backgroundImage: `url(${bgImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-4 pt-12 px-8 lg:px-0" style={divStyle}>
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between flex-col md:flex-row gap-[30px]">
          <div className="w-full md:w-1/3">
            <h1 className="text-2xl">
              Apprise <span className="text-[#17C3B2]">Care</span>
            </h1>
            <p className="py-2">
              Lorem ipsum dolor sit consectet adipisicing sed do eiusmod temp
              incididunt ut labore. Lorem Ipsum is simply dummy.
            </p>
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              © Copyright {year} developed by{" "}
              <span className="text-primaryColor font-semibold">AM ANTOR</span>{" "}
              all right reserved
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="w-9 h-9 border border-solid border-[#17C3B2] text-[#17C3B2] rounded-full flex items-center justify-center group hover:border-[#17C3B2] hover:text-white hover:bg-[#17C3B2] transition duration-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-[#17C3B2]">
              Quick Links
            </h2>

            <ul>
              {quickLinks1.map((item) => (
                <li key={item.path} className="mb-[10px]">
                  <Link
                    to={item.path}
                    className="text-textColor text-[16px] font-[400] hover:text-[#17C3B2] transition duration-150"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-[#17C3B2]">
              Information
            </h2>

            <ul>
              {quickLinks2.map((item) => (
                <li key={item.path} className="mb-[10px]">
                  <Link
                    to={item.path}
                    className="text-textColor text-[16px] font-[400] hover:text-[#17C3B2] transition duration-150"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-[#17C3B2]">
              Support
            </h2>

            <ul>
              {quickLinks3.map((item) => (
                <li key={item.path} className="mb-[10px]">
                  <Link
                    to={item.path}
                    className="text-textColor text-[16px] font-[400] hover:text-[#17C3B2] transition duration-150"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
