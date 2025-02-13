import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

import hotimg from "../../../assets/images/hot.png";
import like from "../../../assets/images/like.png";
import nothot from "../../../assets/images/not-hot.png";
import circle from "../../../assets/images/Danger Circle.png";
import { RxCross1 } from "react-icons/rx";

export default function HotNotSlider({ data }) {
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);

    setTimeout(() => {
      if (swiperRef.current) {
        if (direction === "left") {
          swiperRef.current.slideNext(); // Swipe left
        } else {
          swiperRef.current.slidePrev(); // Swipe right
        }
      }
      setSwipeDirection(null);
    }, 300); // Timeout ensures the "Hot/Not" image appears briefly
  };

  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onTouchMove={(swiper) => {
          const diff = swiper.touches.currentX - swiper.touches.startX;
          if (diff > 30) {
            setSwipeDirection("right");
          } else if (diff < -30) {
            setSwipeDirection("left");
          } else {
            setSwipeDirection(null);
          }
        }}
        onTouchEnd={() => setSwipeDirection(null)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={item.img}
                alt={`${item.name}`}
                className="w-full h-full object-cover rounded-md aspect-[9/16] max-h-full"
              />

              <div
                className={`absolute ${
                  swipeDirection === "left" ? "hotnotbg" : ""
                } inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent text-white py-2 md:p-4 rounded-md`}
              >
                <div className="mb-12 md:mb-16 px-8">
                  <div>
                    <div className="flex justify-between">
                      <div>
                        <p className="text-xl font-bold">{item.name}</p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.2)] rounded-lg flex justify-center items-center">
                        <p className="text-black text-xs z-40 px-5 ">
                          {item.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm">{item.city}</p>
                  </div>

                  <div className="mt-2 md:mb-5 flex gap-x-3">
                    {item.interests.map((interest, idx) => (
                      <button
                        key={idx}
                        className="bg-white text-black rounded-full text-xs md:text-sm px-4 py-2"
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Show Hot/Not Image Only on the Swiping Image */}
              {swipeDirection && activeIndex === index && (
                <div
                  className={`text-4xl absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    swipeDirection === "left" ? "rotate-12" : "-rotate-12"
                  }`}
                >
                  <img
                    src={swipeDirection === "left" ? hotimg : nothot}
                    alt="Swipe Indicator"
                  />
                </div>
              )}

              <div className="flex items-center justify-between px-6 py-3 w-full absolute bottom-0 z-30 text-3xl">
                {/* Like Button (Swipe Left) */}
                <button onClick={() => handleSwipe("left")}>
                  <img src={like} className="size-10 md:size-auto" alt="Like" />
                </button>

                <div>
                  <img className="rotate-12" src={circle} alt="" />
                </div>

                {/* Cross Button (Swipe Right) */}
                <button
                  onClick={() => handleSwipe("right")}
                  className="bg-white text-black rounded-full size-8 lg:size-14 flex items-center justify-center"
                >
                  <RxCross1 />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
