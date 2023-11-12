import React from "react";
import Lottie from "lottie-react";
import underConstructionLottie from "../../assets/underconstruction.json";

const UnderConstruction = () => {
  return (
    <div className="px-8 lg:px-0 py-0 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <Lottie
          animationData={underConstructionLottie}
          loop={true}
          className="w-full lg:w-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default UnderConstruction;
