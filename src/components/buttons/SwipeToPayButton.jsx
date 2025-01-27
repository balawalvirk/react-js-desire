import React from "react";

const SwipeToPayButton = () => {
  return (
    <div className=" justify-center  w-full">
      <div className="relative w-full h-12 bg-primary rounded-full overflow-hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <div className="w-20 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold">
            9.0$
          </div>
        </div>
        <div className="absolute inset-y-0 right-24 flex items-center pl-3">
          <div className="text-white font-semibold">Swipe To Pay</div>
        </div>
      </div>
    </div>
  );
};

export default SwipeToPayButton;
