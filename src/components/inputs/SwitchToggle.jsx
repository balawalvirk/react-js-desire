import React from "react";

const SwitchToggle = ({ isChecked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={onChange}
        />
        <div
          className={`block w-12 h-6 rounded-full transition duration-300 ease-in-out 
            ${isChecked ? "bg-black" : "bg-[#EFEFF4]"}`}
        ></div>
        <div
          className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition duration-300 ease-in-out 
            ${isChecked ? "transform translate-x-6" : ""}`}
        ></div>
      </div>
    </label>
  );
};

export default SwitchToggle;
