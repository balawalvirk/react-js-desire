import React from "react";
import { GoStopwatch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbArrowCurveRight } from "react-icons/tb";
import map from "../../../assets/images/map.png";
import FormInput from "../../inputs/FormInput";
import StandardModal from "../StandardModal";
const PlaceOfResidenceModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <p className="text-xl font-bold">Select City</p>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-5">
          <FormInput
            inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
            className={"space-y-2"}
            placeholder={"Chicago USA"}
            type={"text"}
          />
          <p className="text-sm my-3">History</p>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-sm text-secondary gap-x-3">
              <GoStopwatch size={25} />
              <p>Orlando</p>
            </div>
            <TbArrowCurveRight />
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-sm text-secondary gap-x-3">
              <GoStopwatch size={25} />
              <p>Orlando</p>
            </div>
            <TbArrowCurveRight />
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-sm text-secondary gap-x-3">
              <GoStopwatch size={25} />
              <p>Orlando</p>
            </div>
            <TbArrowCurveRight />
          </div>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-sm text-secondary gap-x-3">
              <GoStopwatch size={25} />
              <p>Orlando</p>
            </div>
            <TbArrowCurveRight />
          </div>
        </div>

        <div className="relative">
          <img src={map} className="w-full" alt="" />
          <IoLocationSharp
            size={30}
            color="red"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </StandardModal>
  );
};

export default PlaceOfResidenceModal;
