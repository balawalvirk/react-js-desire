import React from "react";
import { BiExpandAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import img from "../../../assets/images/vip3.jpeg";
import StandardModal from "../StandardModal";
import CallControls from "./CallControls";
const AudioCallModal = ({ isOpen, onClose }) => {
  return (
    <>
      <StandardModal isOpen={isOpen} onClose={onClose} size="xl">
        <div>
          <img
            src={img}
            alt=""
            className="rounded-xl bg-white/30 blur-lg relative "
          />
          <div className="absolute inset-0  top-5 left-5 right-5">
            <div className="flex justify-between">
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <BiExpandAlt size={20} />
              </div>
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <CiMenuKebab size={20} />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 size-44 top-10 left-1/3">
            <img
              src={img}
              className="rounded-full border-4 border-white "
              alt=""
            />
            <p className="text-white text-2xl font-bold text-center">
              Miracle Addi
            </p>
            <p className="text-medium text-center text-[#FFFFFF]">00:03:48</p>
          </div>
          <div className="absolute w-[50%] bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center">
            <CallControls />
          </div>
        </div>
      </StandardModal>
    </>
  );
};

export default AudioCallModal;
