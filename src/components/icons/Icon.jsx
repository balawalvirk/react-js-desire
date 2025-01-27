import React from "react";

const Icon = ({ icon, handleClick, className }) => {
  return (
    <div
      onClick={handleClick}
      className={`${className} border-2 flex justify-center items-center rounded-full cursor-pointer border-lightSecondary  size-10`}
    >
      {icon}
    </div>
  );
};

export default Icon;
