import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const visibleProfiles = [
  {
    title: "Gold Member Package",
    description: "Unlock Gold Benefits and Access Additional Features",
    coins: "50 Coins",
    subText: "100",
    percent: "50%",
    features: [
      "Overview of other members in the area",
      "See who likes your profile",
      "Profile marked Gold",
      "Better ranking on the homepage",
      "Start unlimited new conversations",
      "Change your location every time",
      "You get 500 free minutes for call/video",
    ],
    color: "#DB9501",
  },
  {
    title: "VIP Member Package",
    description: "Unlock VIP Benefits and Access Additional Features",
    coins: "100 Coins",
    subText: "100",
    percent: "50%",
    features: [
      "Overview of other members in the area",
      "See who likes your profile",
      "Always displayed in top positions",
      "Profile marked VIP",
      "See all private pictures",
      "Start unlimited new conversations",
      "Start unlimited new conversations",
      "Change your location every time",
      "You get 500 free minutes for call / video",
    ],
    color: "#C61323",
  },
];
const InVisibleProfilesData = [
  {
    title: "Ghost Member Package",
    description: "Unlock Ghost Benefits and Access Additional Features",
    coins: "20 Coins",
    subText: "100",
    percent: "50%",
    features: [
      "You profile is only visible to friends",
      "Stealth icons for free",
      "You get 200 free minutes for call / video",
    ],
    color: "#F6F6F6",
  },
  {
    title: "Ghost Member Package",
    description: "Unlock Ghost Benefits and Access Additional Features",
    coins: "100 Coins",
    subText: "200",
    percent: "50%",
    features: [
      "You profile is only visible to friends",
      "Stealth icons for free",
      "Overview of other members in the area",
      "See who likes your profile",
      "See all private pictures",
      "Start unlimited new conversations",
      "Start unlimited new conversations",
      "Change your location every time",
      "You get 1000 free minutes for call / video",
    ],
    color: "#C61323",
  },
  {
    title: "Celebrity Member Package",
    description: "Unlock Celebrity Benefits and Access Additional Features",
    coins: "500 Coins",
    subText: "1000",
    percent: "50%",
    features: [
      "You profile is only visible to friends",
      "Stealth icons for free",
      "Overview of other members in the area",
      "See who likes your profile",
      "See all private pictures",
      "Start unlimited new conversations",
      "Change your location every time",
      "Nobody can take screenshots",
    ],
    color: "#272829",
  },
];
const VisibleProfiles = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className={`h-3 w-3 rounded-full ${
          i === 0 ? "bg-red-500" : "bg-gray-400"
        }`}
      />
    ),
    appendDots: (dots) => (
      <div className="flex justify-center space-x-2 mt-2 rounded-full relative z-10 bg-white py-2">
        {dots}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {data?.map((i, index) => (
        <div key={index} className="p-4">
          <div
            style={{ backgroundColor: i?.color }}
            className="text-white p-4 rounded-2xl mb-5 relative"
          >
            <h2 className="text-md lg:text-[20px] font-bold">{i?.title}</h2>
            <p className="text-xs lg:text-sm mb-6">{i?.description}</p>
            <p className="text-sm lg:text-[20px] font-bold">
              {i?.coins}{" "}
              <sub className="line-through text-sm">{i?.subText}</sub>
            </p>

            <div className="absolute right-5 lg:top-24 lg:right-5">
              <div className="size-16 md:size-20 flex items-center justify-center rounded-full bg-primary">
                <p>
                  {i?.percent} <br /> OFF
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-2 space-y-2 relative">
            {i?.features.map((feature, index) => (
              <div className="flex justify-between text-sm" key={index}>
                <p>{feature}</p>
                <FaCheckCircle color="#13C634" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </Slider>
  );
};
const InVisibleProfiles = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div
        className={`h-3 w-3 rounded-full ${
          i === 0 ? "bg-red-500" : "bg-gray-400"
        }`}
      />
    ),
    appendDots: (dots) => (
      <div className="flex justify-center space-x-2 mt-2 rounded-full relative z-10 bg-white py-2 mb-6">
        {dots}
      </div>
    ),
  };

  return (
    <>
      <Slider {...settings}>
        {data?.map((i, index) => (
          <div key={index} className="p-4">
            <div
              style={{ backgroundColor: i?.color }}
              className={` ${
                index === 0 ? "text-[#272829]" : "text-white"
              } p-4 rounded-2xl mb-5 relative`}
            >
              <h2 className="text-md lg:text-[20px] font-bold">{i?.title}</h2>
              <p className="text-xs lg:text-sm mb-6">{i?.description}</p>
              <p className="text-sm lg:text-[20px] font-bold">
                {i?.coins}{" "}
                <sub className="line-through text-sm">{i?.subText}</sub>
              </p>

              <div className="absolute right-5 lg:top-24 lg:right-5">
                <div className="size-16 md:size-20 flex items-center justify-center rounded-full bg-primary text-white">
                  <p>
                    {i?.percent} <br /> OFF
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 mb-0 space-y-2 relative">
              {i?.features.map((feature, index) => (
                <div className="flex justify-between text-sm" key={index}>
                  <p>{feature}</p>
                  <FaCheckCircle color="#13C634" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};
const SubscriptionModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("visible");
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div>
        <p className="text-lg lg:text-xl font-bold mb-5    ">Subscription</p>
        <div className="flex items-center justify-center  w-full border border-lightSecondary rounded-full mb-5 ">
          <button
            className={`text-xs lg:text-normal px-4  h-10 lg:h-[52px] w-full rounded-full   ${
              tab === "visible"
                ? "bg-[#272829] text-white"
                : " text-black bg-white"
            }`}
            onClick={() => setTab("visible")}
          >
            Visible Profiles
          </button>
          <button
            className={`text-xs lg:text-normal px-4 h-10 lg:h-[52px]  rounded-full w-full  ${
              tab === "invisible"
                ? "bg-[#272829] text-white"
                : " text-black bg-white"
            }`}
            onClick={() => setTab("invisible")}
          >
            Invisible Profiles
          </button>
        </div>

        <div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div>
          {tab === "visible" ? (
            <VisibleProfiles data={visibleProfiles} />
          ) : (
            <InVisibleProfiles data={InVisibleProfilesData} />
          )}
          <SwipeToPayButton />
        </div>
      </div>
    </StandardModal>
  );
};

export default SubscriptionModal;
