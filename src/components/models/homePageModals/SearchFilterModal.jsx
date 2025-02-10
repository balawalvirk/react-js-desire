import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Button from "../../buttons/Button";
import FormInput from "../../inputs/FormInput";
import StandardModal from "../StandardModal";
import BoostPositionModal from "./BoostPositionModal";
import { TwoThumbInputRange } from "react-two-thumb-input-range";

const SearchFilterModal = ({
  isOpen,
  onClose,
  positionModal,
  setPositionModal,
  setFilterModal,
}) => {
  const [value, setValue] = useState([20, 28]);

  const onValueChange = (values) => {
    setValue(values);
  };
  return (
    <>
      <BoostPositionModal
        isOpen={positionModal}
        onClose={(prev) => setPositionModal(!prev)}
      />
      <StandardModal isOpen={isOpen} onClose={onClose}>
        <div>
          <div className="flex justify-between mb-6">
            <div className="w-[80%] space-y-3">
              <p className="text-xl font-bold">Filter</p>
              <p className="text-secondary text-sm">
                Choose a filter t o match profiles
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
            <div className="mb-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-base font-semibold text-black">Distance</h3>
                <span className="text-sm font-medium text-gray-600">50km</span>
              </div>

              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  className="w-full h-2  rounded-lg appearance-none cursor-pointer inputRange"
                />
              </div>
            </div>
            <div className="mb-5">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-base font-semibold text-black">Age</h3>
                <span className="text-sm font-medium text-gray-600">20-40</span>
              </div>

              <TwoThumbInputRange
                onChange={onValueChange}
                values={value}
                min={1000}
                max={10000}
                railColor={"#E8E6EA"}
                thumbColor={"#272829"}
                trackColor={"#272829"}
                thumbStyle={{
                  height: "25px",
                  width: "25px",
                }}
                inputStyle={{
                  minWidth: "100%",
                }}
                showLabels={false}
              />
            </div>
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              className={"space-y-2"}
              placeholder={"Chicago USA"}
              type={"text"}
              icon={<MdEmail />}
              label={"Location"}
            />
            <Button
              text={"Apply Filter"}
              btnClassName={
                "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
              }
              handleClick={() => {
                setFilterModal(false);
                setPositionModal(true);
              }}
            />
            <div className="flex justify-center items-center mb-4">
              <span className="text-[#9EA1AE] text-sm">Clear </span>
            </div>
          </div>
        </div>
      </StandardModal>
    </>
  );
};

export default SearchFilterModal;
