import { FaCheckCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import spain from "../../../assets/images/spain.png";
import germany from "../../../assets/images/germany.png";
import unitedStates from "../../../assets/images/united states.png";
import france from "../../../assets/images/france.png";
import { useState } from "react";
const LanguageButton = ({ title, handleSelection, isSelected, icon }) => {
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
          <img src={icon} alt="" />
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

const LanguageModal = ({ isOpen, onClose }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelection = (index) => {
    setSelectedIndex(index);
  };
  const languages = [
    {
      name: "English",
      icon: unitedStates,
    },
    {
      name: "German",
      icon: germany,
    },
    {
      name: "French",
      icon: france,
    },
    {
      name: "Spanish",
      icon: spain,
    },
  ];

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-6">
        <p className="text-xl font-bold">Language</p>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="mb-24">
        {languages?.map((i, index) => {
          return (
            <LanguageButton
              title={i?.name}
              icon={i?.icon}
              handleSelection={() => handleSelection(index)}
              isSelected={selectedIndex === index}
            />
          );
        })}
      </div>
      <Button
        text={"Apply"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
        }
      />
    </StandardModal>
  );
};

export default LanguageModal;
