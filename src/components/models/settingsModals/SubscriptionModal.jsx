import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
const features = [
  {
    text: "Overview of other members in the area",
  },
  {
    text: "See who likes your profile",
  },
  {
    text: "Profile marked Gold",
  },
  {
    text: "Better ranking on the homepage",
  },
  {
    text: "Start unlimited new conversations",
  },
  {
    text: "Change your location every time",
  },
  {
    text: "You get 500 free minutes for call/video",
  },
];
const VisibleProfiles = () => {
  return (
    <>
      <div className="bg-[#DB9501] text-white p-4 rounded-2xl mb-5 relative">
        <h2 className="text-[20px] font-bold ">Gold Member Package</h2>
        <p className="text-sm mb-6">
          Unlock Gold Benefits and Access Additional Features
        </p>
        <p className="text-[20px] font-bold ">
          50 Coins <sub className="line-through text-sm">100</sub>
        </p>

        <div className="absolute top-24 right-5 ">
          <div className="size-20 flex items-center justify-center rounded-full bg-primary  ">
            <p>
              50% <br /> OFF
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-12 mb-4 space-y-2 relative">
        {features.map((feature, index) => (
          <div className="flex justify-between text-sm " key={index}>
            <p> {feature.text}</p>
            <p>
              <FaCheckCircle color="#13C634" />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
const InVisibleProfiles = () => {
  return (
    <>
      <div className="bg-[#272829] text-white p-4 rounded-2xl mb-5 relative">
        <h2 className="text-[20px] font-bold ">Celebrity Member Package</h2>
        <p className="text-sm mb-6">
          Unlock Celebrity Benefits and Access Additional Features
        </p>
        <p className="text-[20px] font-bold ">
          500 Coins <sub className="line-through text-sm">1000</sub>
        </p>

        <div className="absolute top-24 right-5 ">
          <div className="size-20 flex items-center justify-center rounded-full bg-primary  ">
            <p>
              50% <br /> OFF
            </p>
          </div>
        </div>
      </div>
      <div className=" mt-12 mb-4 space-y-2 relative">
        {features.map((feature, index) => (
          <div className="flex justify-between text-sm " key={index}>
            <p> {feature.text}</p>
            <p>
              <FaCheckCircle color="#13C634" />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
const SubscriptionModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("visible");
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div>
        <p className="text-xl font-bold mb-5    ">Subscription</p>
        <div className="flex items-center justify-center  w-full border border-lightSecondary rounded-full mb-5 ">
          <button
            className={`px-4  h-[52px] w-full rounded-full   ${
              tab === "visible"
                ? "bg-[#272829] text-white"
                : " text-black bg-white"
            }`}
            onClick={() => setTab("visible")}
          >
            Visible Profiles
          </button>
          <button
            className={`px-4 h-[52px]  rounded-full w-full  ${
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
          {tab === "visible" ? <VisibleProfiles /> : <InVisibleProfiles />}
          <SwipeToPayButton />
        </div>
      </div>
    </StandardModal>
  );
};

export default SubscriptionModal;
