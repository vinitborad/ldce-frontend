import React from "react";
import DepartmentLogo from "../../assets/images/departments/it/department-logo.png";

export default function App() {
  return (
    <div className=" mb-4 rounded-2xl p-2 hover:scale-110 transition-all duration-75">
        <img 
            src={DepartmentLogo} 
            alt="Department Logo" 
            className=" w-48 "
        />
        <p className=" bg-gray-100 flex items-center justify-start mt-3 -mb-0 text-center w-48 font-bold font-mono text-base rounded-2xl">Information Technology Chemical</p>
    </div>
  );
}
