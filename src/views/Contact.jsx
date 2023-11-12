import React from "react";
import SectionHeader from "../shared/sectionHeader/SectionHeader";
import ConnectForm from "../shared/connectForm/ConnectForm";

const Contact = () => {
  return (
    <div className="px-8 lg:px-0 py-0 lg:py-24">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          title="Contact Us"
          desc="We are leading healthcare provider."
        />
        <ConnectForm />
      </div>
    </div>
  );
};

export default Contact;
