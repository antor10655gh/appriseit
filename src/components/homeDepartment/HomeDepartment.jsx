import React from "react";
import SectionHeader from "../../shared/sectionHeader/SectionHeader";
import DepartmentTabs from "../../shared/departmentTabs/DepartmentTabs";

const HomeDepartment = () => {
  return (
    <div className="px-8 lg:px-0 py-6 lg:py-12">
      <div className="max-w-screen-xl mx-auto">
        <SectionHeader
          title="Our Department"
          desc="We are leading healthcare provider."
        />
        <div>
          <DepartmentTabs />
        </div>
      </div>
    </div>
  );
};

export default HomeDepartment;
