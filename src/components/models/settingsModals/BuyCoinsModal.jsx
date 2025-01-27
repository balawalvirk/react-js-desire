import { useState } from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";

const DollarButton = ({ title, handleSelection, isSelected }) => {
  return (
    <div
      className={`w-full mb-3 max-w-full lg:max-w-md p-2 lg:p-4 border border-lightSecondary rounded-full cursor-pointer transition-colors duration-200 ${
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
          <AiOutlineDollar className="size-6" />
          <span className="text-xs lg:text-sm">{title}</span>
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

const BuyCoinsModal = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelection = (index) => {
    setSelectedIndex(index);
  };

  const dollarOptions = [
    "1 Coin (2.90$/Coin) 2.90$",
    "5 Coins (2.80$/Coin) 14.00$",
    "10 Coins (2.70$/Coin) 27.00$",
    "10 Coins (2.70$/Coin) 27.00$",
  ];

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <div className="w-full lg:w-[80%] space-y-2 lg:space-y-3">
            <p className="text-lg lg:text-xl font-bold">Buy Coins</p>
            <p className="text-secondary text-xs lg:text-sm">
              Buy Coin to boost your profile in your region
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div>
          {dollarOptions.map((option, index) => (
            <DollarButton
              key={index}
              handleSelection={() => handleSelection(index)}
              isSelected={selectedIndex === index}
              title={option}
            />
          ))}
        </div>
        <SwipeToPayButton />
      </div>
    </StandardModal>
  );
};

export default BuyCoinsModal;
