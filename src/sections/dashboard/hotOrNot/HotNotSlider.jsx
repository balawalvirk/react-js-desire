import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hotimg from "../../../assets/images/hot.png";
import like from "../../../assets/images/like.png";
import cut from "../../../assets/images/cut.png";
import nothot from "../../../assets/images/not-hot.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import circle from "../../../assets/images/Danger Circle.png";
import "../../../App.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { FaCross } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

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

                <div
                  className={`absolute ${
                    item?.type === "hot" ? "hotnotbg" : ""
                  } inset-0 flex flex-col justify-end  bg-gradient-to-t from-black via-transparent to-transparent text-white py-2 md:p-4 rounded-md`}
                >
                  <div className="mb-12 md:mb-16 px-8">
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

                    <div className="mt-2 md:mb-5 flex gap-x-3">
                      {item.interests.map((interest, idx) => (
                        <button className="bg-white text-black rounded-full text-xs md:text-sm px-4 py-2">
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className={`text-4xl absolute z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
                    item?.type === "hot" ? "rotate-12" : "-rotate-12"
                  }`}
                >
                  <img src={item?.type === "hot" ? hotimg : nothot} alt="" />
                </div>
                <div className="flex items-center justify-between px-6 py-3 w-full absolute bottom-0 z-30 text-3xl">
                  <div>
                    <img src={like} className="size-10 md:size-auto" alt="" />
                  </div>
                  <div>
                    <img className="rotate-12" src={circle} alt="" />
                  </div>
                  <div>
                    <div className="bg-white text-black rounded-full size-8 lg:size-14 flex items-center justify-center">
                      <RxCross1 />
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
