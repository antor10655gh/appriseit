import React from "react";
import Hero from "../components/hero/Hero";
import HomeServices from "../components/homeServices/homeServices";
import HomeAbout from "../components/homeAbout/HomeAbout";
import HomeDepartment from "../components/homeDepartment/HomeDepartment";
import HomeSpecialist from "../components/homeSpecialist/HomeSpecialist";
import LatestNews from "../components/latestNews/LatestNews";
import StayConnect from "../components/stayConnect/StayConnect";

const Home = () => {
  return (
    <>
      <Hero />
      <HomeServices />
      <HomeAbout />
      <HomeDepartment />
      <HomeSpecialist />
      <LatestNews />
      <StayConnect />
    </>
  );
};

export default Home;
