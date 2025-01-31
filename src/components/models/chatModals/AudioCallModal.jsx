import { BiExpandAlt } from "react-icons/bi";
import img from "../../../assets/images/vip3.jpeg";
import menu from "../../../assets/svgs/menu.svg";
import DropdownMenu from "../../inputs/DropdownMenu";
import StandardModal from "../StandardModal";
import CallControls from "./CallControls";
import expand from "../../../assets/images/Left 3.png";
const MENU_ITEMS = [
  {
    id: 1,
    label: "Send Message",
    action: () => console.log("Send Like clicked"),
  },
  {
    id: 2,
    label: "Convert to Video",
    action: () => console.log("Share Profile clicked"),
  },
];
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
          <div className="absolute inset-0  top-8 left-8 right-8">
            <div className="flex justify-between">
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <img src={expand} size={20} />
              </div>
              <div className="bg-white size-14 rounded-full flex justify-center items-center">
                <DropdownMenu
                  menuItems={MENU_ITEMS}
                  icon={<img src={menu} alt="menu" />}
                  buttonClassName="bg-white"
                  dropdownClassName="w-36 rounded-lg shadow-xl mt-4"
                  itemClassName="text-[#272829]"
                  onOpen={() => console.log("Dropdown opened")}
                  onClose={() => console.log("Dropdown closed")}
                />
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
