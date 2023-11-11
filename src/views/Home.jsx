import React from "react";
import Hero from "../components/hero/Hero";
import HomeServices from "../components/homeServices/homeServices";
import HomeAbout from "../components/homeAbout/HomeAbout";
import HomeDepartment from "../components/homeDepartment/HomeDepartment";
import HomeSpecialist from "../components/homeSpecialist/HomeSpecialist";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeDepartment />
      <HomeSpecialist />
    </>
  );
};

export default Home;
