import React from "react";

const Checkbox = ({ label, labelClassName }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          className={`shrink-0 mt-0.5 border-gray-200 rounded size-4`}
        />
        <label className={`${labelClassName} text-sm  text-[#6A6A6A] ms-3 `}>
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
