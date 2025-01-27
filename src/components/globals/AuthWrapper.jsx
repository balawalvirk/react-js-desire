import React, { useState } from "react";
import desires from "../../assets/images/desires-bg.png";
import logo from "../../assets/images/logo.png";

const AuthWrapper = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="grid lg:grid-cols-2 h-screen">
      {/* Left Column */}
      <div className="relative overflow-hidden">
        <img src={desires} className="h-full w-full object-cover" alt="" />
        <img
          src={logo}
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
          alt="Logo"
        />
      </div>

      {/* Right Column */}
      <div className="overflow-y-auto h-screen">{children}</div>
    </div>
  );
};

export default AuthWrapper;
