import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 200,
});

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;
