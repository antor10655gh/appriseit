import React from "react";
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import SpecialistSlider from "../../shared/specialistSlider/SpecialistSlider";

const HomeSpecialist = () => {
  return (
    <div className="px-8 lg:px-0 py-0 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          title="Meet our specialists"
          desc="We are leading healthcare provider."
        />

        <SpecialistSlider />
      </div>
    </div>
  );
};

export default HomeSpecialist;
