import React from "react";
import google from "../assets/images/gg.png";
import apple from "../assets/images/app.png";
import facebook from "../assets/images/fb.png";
const SocialIcon = () => {
  let images = [apple, google, facebook];
  return (
    <div className="flex justify-center items-center gap-x-3">
      {images?.map((img, index) => (
        <div className="size-16 rounded-full bg-white shadow-lg flex justify-center items-center">
          <img src={img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SocialIcon;
