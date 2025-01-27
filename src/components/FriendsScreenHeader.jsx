import React from "react";

const FriendsScreenHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-between mb-12 mt-5">
      <p className="text-normal font-semibold ">{title}</p>
      <div className="flex items-center text-secondary">
        <input
          type="radio"
          className="size-5 mt-0.5 border-gray-200 rounded-full  "
        />
        <label className="text-md font-semibold ms-2 0">Select</label>
      </div>
    </div>
  );
};

export default FriendsScreenHeader;
