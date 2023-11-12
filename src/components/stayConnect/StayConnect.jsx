import React from "react";
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import ConnectForm from "../../shared/connectForm/ConnectForm";

const StayConnect = () => {
  return (
    <div className="px-8 lg:px-0 py-6 lg:py-12">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          title="Stay Connect With Us"
          desc="We are leading healthcare provider."
        />
        <ConnectForm />
      </div>
    </div>
  );
};

export default StayConnect;
