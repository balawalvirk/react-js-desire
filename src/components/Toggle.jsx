import React from "react";

const Toggle = ({ tab, setTab }) => {
  return (
    <div className="flex items-center justify-center  w-[400px] bg-[#393A3B] rounded-full ">
      <button
        className={`px-4 py-2 m-2 rounded-full  w-full ${
          tab === "Login" ? "bg-white text-black" : " text-white"
        }`}
        onClick={() => setTab("Login")}
      >
        Sign In
      </button>
      <button
        className={`px-4 py-2 m-2 rounded-full w-full  ${
          tab === "SignUp" ? "bg-white text-black" : " text-white"
        }`}
        onClick={() => setTab("SignUp")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Toggle;
