import React from "react";
import { BiExpandAlt } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import img from "../../../assets/images/vip3.jpeg";
import StandardModal from "../StandardModal";
import CallControls from "./CallControls";
import { PiCameraRotate } from "react-icons/pi";
import DropdownMenu from "../../inputs/DropdownMenu";
import menu from "../../../assets/svgs/menu.svg";
const MENU_ITEMS = [
  { id: 1, label: "Effects", action: () => console.log("Send Like clicked") },
  {
    id: 2,
    label: "Send Message",
    action: () => console.log("Share Profile clicked"),
  },
  { id: 3, label: "Mute", action: () => console.log("Mute clicked") },
  {
    id: 4,
    label: "Share Screen",
    action: () => console.log("Unfriend clicked"),
  },
  {
    id: 4,
    label: "Convert to Audio",
    action: () => console.log("Unfriend clicked"),
  },
];
const VideoCallModal = ({ isOpen, onClose }) => {
  return (
    <>
      <StandardModal isOpen={isOpen} onClose={onClose} size="xl">
        <div>
          <img
            src={img}
            alt=""
            className="rounded-xl min-w-full min-h-full relative "
          />
          <div className="absolute inset-0  top-8 left-8 right-8">
            <div className="flex justify-between">
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <BiExpandAlt size={20} />
              </div>
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <DropdownMenu
                  menuItems={MENU_ITEMS}
                  icon={<img src={menu} alt="menu" />}
                  buttonClassName="bg-white"
                  dropdownClassName="w-36 rounded-lg shadow-xl"
                  itemClassName="text-[#272829]"
                  onOpen={() => console.log("Dropdown opened")}
                  onClose={() => console.log("Dropdown closed")}
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 top-28 left-8">
            <div className="relative inline-block">
              <img
                src={img}
                className="h-36 w-36 rounded-3xl border-2 border-white"
                alt="Profile"
              />
              <span className="absolute bottom-3 right-3  p-1 rounded-full">
                <PiCameraRotate size={25} className="text-white" />
              </span>
            </div>
          </div>
          <div className="absolute inset-0 size-44 top-2/4 left-1/3">
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

export default VideoCallModal;
