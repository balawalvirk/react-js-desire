import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import boost from "../../../assets/images/boost.png";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
const BoostPositionModal = ({ isOpen, onClose }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
  };
  return (
    <>
      <StandardModal isOpen={isOpen} onClose={onClose} size="md">
        <div>
          <div className="flex items-center justify-between mb-6 text-[#090D20]">
            <p className="text-xl font-bold  text-[#2D264B]">Position</p>

            <button onClick={onClose}>
              <IoMdClose className="h-8 w-8" />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <img src={boost} alt="" />
          </div>
          <div className="flex justify-between">
            <p className="text-black text-sm text-center my-3">Use interval</p>
            <div className="flex items-center justify-start gap-2">
              <div className="relative inline-block w-[48px] h-7 select-none">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="absolute w-0 h-0 opacity-0"
                  checked={isEnabled}
                  onChange={handleToggle}
                  role="switch"
                  aria-checked={isEnabled}
                />
                <label
                  htmlFor="toggle"
                  className={`
            block overflow-hidden h-7 rounded-full cursor-pointer transition-colors duration-300 ease-in-out
            ${isEnabled ? "bg-blue-600" : "bg-gray-200"}
          `}
                >
                  <span
                    className={`
              block h-7 w-7 rounded-full transform transition-transform duration-300 ease-in-out bg-white shadow-md
              ${isEnabled ? "translate-x-[26px]" : "translate-x-0"}
            `}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="text-xl font-semibold text-center mb-2">
              Position - 01
            </p>
            <p className="text-secondary text-sm text-center mb-5">
              When users search for your gender and you are within your set
              search radius, your profile currently appears in position - 01
            </p>
            <p className="text-secondary text-sm text-center">
              Here you can automatically preset the boost at an arrival.
            </p>
            <div className="flex justify-center items-center gap-x-4 my-3">
              <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
              <span className="text-[#9EA1AE] text-sm">or </span>
              <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
            </div>
            <p className="text-secondary text-sm text-center">
              You can also get your profile to position 1 with an instant boost.
            </p>

            <Button
              text={"Use Boost"}
              btnClassName={
                "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-3"
              }
            />
          </div>
        </div>
      </StandardModal>
    </>
  );
};

export default BoostPositionModal;
