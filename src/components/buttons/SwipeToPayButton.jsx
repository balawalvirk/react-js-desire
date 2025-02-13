import React from "react";
import swipe from "../../assets/images/swipe-arrows.png";
const SwipeToPayButton = () => {
  return (
    <div className=" justify-center  w-full my-4">
      <div className="relative w-full h-12 bg-primary rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <div className="w-20 h-10 bg-white rounded-full flex items-center justify-center text-primary font-semibold">
            9.0$
          </div>
          <div>
            <img src={swipe} alt="" />
          </div>
        </div>
        <div className="absolute inset-y-0 right-6 lg:right-24 flex items-center pl-3">
          <div className="text-white font-semibold">Swipe To Pay</div>
        </div>
      </div>
    </div>
  );
};

export default SwipeToPayButton;
