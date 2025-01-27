import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCheckCircle, FaSubscript } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import { MdOutlineSubscriptions } from "react-icons/md";

const DollarButton = ({ title, handleSelection, isSelected, icon }) => {
  return (
    <div
      className={`w-full mb-3 max-w-md p-4 border border-lightSecondary rounded-full cursor-pointer transition-colors duration-200 ${
        isSelected ? "bg-[#272829] text-white" : "bg-white text-gray-500"
      }`}
      onClick={handleSelection}
      role="button"
      tabIndex={0}
      aria-label="Coin selection option"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleSelection();
        }
      }}
    >
      <div className="flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-3">
          <span>{icon}</span>
          <span className="text-sm">{title}</span>
        </div>
        <div
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
            isSelected
              ? "border-none bg-white text-black"
              : "border-gray-300 bg-white"
          }`}
        >
          {isSelected && <FaCheckCircle className="w-5 h-5 text-black" />}
        </div>
      </div>
    </div>
  );
};

const PayForCoinModal = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelection = (index) => {
    setSelectedIndex(index);
  };

  const dollarOptions = [
    {
      title: "Pay with Card",
      icon: <MdOutlineSubscriptions size={25} />,
    },
    {
      title: "Pay With BTC",
      icon: <AiOutlineDollar size={25} />,
    },
  ];

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <div className="w-[80%] space-y-3">
            <p className="text-xl font-bold">Pay For Coins</p>
            <p className="text-secondary text-sm">
              Select an option below to buy the coins
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div className="mb-24">
          {dollarOptions.map((option, index) => (
            <DollarButton
              key={index}
              handleSelection={() => handleSelection(index)}
              isSelected={selectedIndex === index}
              title={option?.title}
              icon={option?.icon}
            />
          ))}
        </div>
        <SwipeToPayButton />
      </div>
    </StandardModal>
  );
};

export default PayForCoinModal;
