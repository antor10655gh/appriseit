import React from "react";
import Header from "../shared/header/Header";
import Routers from "../routes/Routers";
import Footer from "../shared/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routers />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
