import { useState } from "react";
import {
  IoIosFemale,
  IoIosMale,
  IoIosTransgender,
  IoMdClose,
} from "react-icons/io";
import StandardModal from "../StandardModal";
import { FaCheck } from "react-icons/fa";
import Button from "../../buttons/Button";
const category = [
  {
    gender: "Male",
    icon: <IoIosMale size={20} />,
  },
  {
    gender: "Female",
    icon: <IoIosFemale size={20} />,
  },
  {
    gender: "Trans",
    icon: <IoIosTransgender size={20} />,
  },
];
const MySearchModal = ({ isOpen, onClose }) => {
  const [selectedGender, setSelectedGender] = useState("Male");

  return (
    <StandardModal size="md" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <p className="text-xl font-bold">My Search</p>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-28">
          {category?.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setSelectedGender(item?.gender);
                }}
                className={`flex items-center   justify-between rounded-full cursor-pointer mb-5 py-3 px-5 ${
                  selectedGender === item?.gender
                    ? "bg-primary text-white"
                    : "bg-white text-secondary border border-[#F3F4F9]"
                }`}
              >
                <div className="flex items-center gap-x-3 ">
                  <span>{item?.icon}</span>
                  <span>{item?.gender}</span>
                </div>
                <div>{selectedGender === item?.gender && <FaCheck />}</div>
              </div>
            );
          })}
        </div>

        <Button
          text={"Save"}
          btnClassName={
            "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
          }
        />
      </div>
    </StandardModal>
  );
};

export default MySearchModal;
