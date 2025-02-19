// import React from "react";
// import swipe from "../../assets/images/swipe-arrows.png";
// const SwipeToPayButton = () => {
//   return (
//     <div className=" justify-center  w-full my-4">
//       <div className="relative w-full h-12 bg-primary rounded-full overflow-hidden">
//         <div className="absolute inset-y-0 left-0 flex items-center pl-2">
//           <div className="w-20 h-10 bg-white rounded-full flex items-center justify-center text-primary font-semibold">
//             9.0$
//           </div>
//           <div>
//             <img src={swipe} alt="" />
//           </div>
//         </div>
//         <div className="absolute inset-y-0 right-6 lg:right-24 flex items-center pl-3">
//           <div className="text-white font-semibold">Swipe To Pay</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SwipeToPayButton;
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import swipe from "../../assets/images/swipe-arrows.png";
const SwipeToPayButton = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    if (isDisabled || isCompleted) return;
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isDisabled || isCompleted) return;

    const containerWidth = containerRef.current.offsetWidth;
    const buttonWidth = buttonRef.current.offsetWidth;
    const maxPosition = containerWidth - buttonWidth;

    const newPosition = Math.min(
      Math.max(
        0,
        e.clientX -
          containerRef.current.getBoundingClientRect().left -
          buttonWidth / 2
      ),
      maxPosition
    );

    setPosition(newPosition);

    if (newPosition >= maxPosition - 10) {
      setIsCompleted(true);
      setIsDragging(false);
      handleSuccess();
    }
  };

  const handleMouseUp = () => {
    if (!isCompleted) {
      setPosition(0);
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (isDisabled || isCompleted) return;
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || isDisabled || isCompleted) return;

    const touch = e.touches[0];
    const containerWidth = containerRef.current.offsetWidth;
    const buttonWidth = buttonRef.current.offsetWidth;
    const maxPosition = containerWidth - buttonWidth;

    const newPosition = Math.min(
      Math.max(
        0,
        touch.clientX -
          containerRef.current.getBoundingClientRect().left -
          buttonWidth / 2
      ),
      maxPosition
    );

    setPosition(newPosition);

    if (newPosition >= maxPosition - 10) {
      setIsCompleted(true);
      setIsDragging(false);
      handleSuccess();
    }
  };

  const handleTouchEnd = () => {
    if (!isCompleted) {
      setPosition(0);
    }
    setIsDragging(false);
  };

  const handleSuccess = () => {
    setIsDisabled(true);
    // Add your success callback here
    console.log("Swipe completed successfully!");
  };

  const handleKeyDown = (e) => {
    if (isDisabled || isCompleted) return;

    if (e.key === "Enter" || e.key === " ") {
      setIsCompleted(true);
      handleSuccess();
    }
  };

  const reset = () => {
    setPosition(0);
    setIsCompleted(false);
    setIsDisabled(false);
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div className=" flex items-center justify-center my-4">
      <div className="w-full max-w-md">
        <div
          ref={containerRef}
          className={`relative h-12 rounded-full ${
            isCompleted ? "bg-green-500" : "bg-primary"
          } 
            transition-colors duration-300 overflow-hidden`}
          role="button"
          tabIndex="0"
          onKeyDown={handleKeyDown}
          aria-label="Swipe button"
        >
          <div
            className="absolute inset-0 flex items-center justify-center gap-x-6 text-gray-600 pointer-events-none"
            style={{
              opacity: isCompleted
                ? 0
                : 1 - position / (containerRef.current?.offsetWidth || 1),
            }}
          >
            <div>
              <img src={swipe} alt="" className="animate-pulse" />
            </div>
            <span className="flex items-center text-white gap-2">
              Swipe to Pay
            </span>
          </div>

          <div
            ref={buttonRef}
            className={`absolute top-1 left-1 h-10 w-16 aspect-square rounded-full 
              ${isDragging ? "cursor-grabbing" : "cursor-grab"} 
              ${isDisabled ? "cursor-not-allowed" : ""} 
              ${isCompleted ? "bg-white text-green-500" : "bg-white shadow-lg"}
              flex items-center justify-center transition-colors duration-300`}
            style={{
              transform: `translateX(${position}px)`,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            9.0$
          </div>

          {isCompleted && (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              Confirmed!
            </div>
          )}
        </div>

        {/* {isCompleted && (
          <button
            onClick={reset}
            className="mt-4 w-full py-2 px-4 bg-blue-500 text-white rounded-lg 
              hover:bg-blue-600 transition-colors duration-300"
          >
            Reset
          </button>
        )} */}
      </div>
    </div>
  );
};

export default SwipeToPayButton;
