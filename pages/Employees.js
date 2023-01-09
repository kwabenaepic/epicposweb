import React from "react";
import LeftNavigation from "../components/LeftNavigation";

const Employees = () => {
  return (
    <div className="flex h-screen container">
      <div className="flex flex-col ">
        <div className="bg-red-300 h-10 w-screen"></div>
        <div className="flex flex-row h-screen ">
          <LeftNavigation />
          <div className="flex-col p-8 w-screen">
        <div className="border-b-2 mb-6 font-medium text-xl">Employees</div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
