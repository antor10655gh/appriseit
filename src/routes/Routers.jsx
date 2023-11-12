import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import About from "../views/About";
import Department from "../views/Department";
import Contact from "../views/Contact";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Routers;
