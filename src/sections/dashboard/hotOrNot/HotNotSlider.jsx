import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../../../App.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function HotNotSlider({ data }) {
  return (
    <>
      <div className="flex justify-center items-center h-[80vh]">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={item.img}
                  alt={`${item.name}`}
                  className="w-full h-full object-cover rounded-md"
                />

                <div className="absolute  inset-0 flex flex-col justify-end  bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 rounded-md">
                  <div className="mb-16 px-8">
                    <div>
                      <div className="flex justify-between">
                        <div>
                          <p className="text-xl font-bold">{item.name}</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.2)] rounded-lg flex justify-center items-center">
                          <p className="text-black text-xs z-40  px-5 ">
                            {item.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm">{item.city}</p>
                    </div>

                    <div className="mt-2 flex gap-x-3">
                      {item.interests.map((interest, idx) => (
                        <button className="bg-white text-black rounded-full text-sm px-4 py-2">
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
