import { CiVideoOn } from "react-icons/ci";
import { FaChevronRight, FaDotCircle } from "react-icons/fa";
import { FiCamera, FiPhone } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import chat from "../../assets/svgs/chat.svg";
import menu from "../../assets/svgs/menu.svg";
import DropdownMenu from "../inputs/DropdownMenu";
import { useNavigate } from "react-router-dom";
import video from "../../assets/svgs/Video 2.svg";
import phone from "../../assets/svgs/call.svg";
const MENU_ITEMS = [
  { id: 1, label: "Send Like", action: () => console.log("Send Like clicked") },
  {
    id: 2,
    label: "Share Profile",
    action: () => console.log("Share Profile clicked"),
  },
  { id: 3, label: "Mute", action: () => console.log("Mute clicked") },
  {
    id: 4,
    label: (
      <>
        <span className="text-primary">Unfriend</span>
      </>
    ),
    action: () => console.log("Unfriend clicked"),
  },
];

const MESSAGE_SCREEN_ITEMS = [
  { id: 1, label: "Delete", action: () => console.log("Delete clicked") },
  { id: 2, label: "Block", action: () => console.log("Block clicked") },
  { id: 3, label: "Mute", action: () => console.log("Mute clicked") },
  {
    id: 4,
    label: (
      <>
        <span className="text-primary">Unfriend</span>
      </>
    ),
    action: () => console.log("Unfriend clicked"),
  },
];
const FriendListCard = ({
  img,
  name,
  location,
  distance,
  screen,
  lastMessage,
  callTime,
  type,
}) => {
  const navigate = useNavigate();
  const renderContent = () => {
    switch (screen) {
      case "friendRequests":
        return (
          <>
            <p className="text-sm lg:text-normal font-medium text-[#13C634]">
              Accept
            </p>
            <span className="text-secondary">
              <IoMdClose className="size-5  lg:size-6" />
            </span>
          </>
        );
      case "requestSent":
        return (
          <>
            <p className="text-sm lg:text-normal font-medium text-primary">
              Revoke Request
            </p>
            <span className="text-secondary">
              <IoMdClose className="size-5  lg:size-6" />
            </span>
          </>
        );
      case "revoke":
        return (
          <>
            <p className="text-sm lg:text-normalfont-medium text-primary">
              Revoke Request
            </p>
            <span className="text-secondary">
              <IoMdClose className="size-5  lg:size-6" />
            </span>
          </>
        );
      case "blockUsers":
        return (
          <p className="text-sm lg:text-normalfont-medium text-primary">
            Unblock
          </p>
        );
      default:
        return renderTypeSpecificContent();
    }
  };

  const renderTypeSpecificContent = () => {
    switch (type) {
      case "chat":
        return (
          <>
            <div className="bg-primary size-2 rounded-full"></div>
            <FiCamera className="text-[#9EA1AE]  size-5  lg:size-6" />
            <DropdownMenu
              menuItems={MESSAGE_SCREEN_ITEMS}
              icon={<img src={menu} alt="menu" className="size-5  lg:size-6" />}
              buttonClassName="bg-white"
              dropdownClassName="w-[160px] rounded-xl shadow-xl"
              itemClassName="text-black"
              onOpen={() => console.log("Dropdown opened")}
              onClose={() => console.log("Dropdown closed")}
            />
          </>
        );
      case "anrufe":
        return (
          <>
            <img
              src={chat}
              alt="chat"
              className=" size-5  lg:size-6"
              onClick={() => {
                navigate("/admin/chat");
              }}
            />
            <CiVideoOn className="text-[#9EA1AE]  size-5  lg:size-6" />
            <FiPhone className="text-[#9EA1AE]  size-5  lg:size-6" />
          </>
        );
      default:
        return (
          <>
            <img src={chat} alt="chat" className="size-5  lg:size-6" />
            <DropdownMenu
              menuItems={MENU_ITEMS}
              icon={<img src={menu} alt="menu" className="size-5  lg:size-6" />}
              buttonClassName="bg-white"
              dropdownClassName="w-36 rounded-lg shadow-xl"
              itemClassName="text-black"
              onOpen={() => console.log("Dropdown opened")}
              onClose={() => console.log("Dropdown closed")}
            />
          </>
        );
    }
  };

  return (
    <>
      <div className="flex items-center w-full gap-x-3 lg:gap-x-5 my-3 cursor-pointer">
        <img src={img} alt="profile" className="size-10 lg:size-auto" />
        <div className="flex justify-between w-full">
          <div className="flex flex-col lg:space-y-1">
            <p className="text-sm lg:text-normal font-medium">{name}</p>
            <p className="text-secondary text-xs lg:text-sm">
              {type === "anrufe"
                ? callTime
                : type === "chat"
                ? lastMessage
                : `${location} - ${distance}`}
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            {renderContent()}
          </div>
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default FriendListCard;

const ProfileFriendsListCard = ({ img, name, location, distance, screen }) => {
  return (
    <>
      <div className="flex items-start w-full gap-x-5 my-3">
        <img src={img} alt="" />
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col space-y-1">
              <p className="font-medium">{name}</p>
              <p className="text-secondary text-sm">
                {`${location} - ${distance}`}
              </p>
            </div>
            <div className="flex items-center gap-4 ">
              {screen === "requests" ? (
                <>
                  <p className="text-[14px] font-medium text-[#13C634]">
                    Allow
                  </p>
                </>
              ) : screen === "revoke" ? (
                <>
                  <p className="text-[14px] font-medium text-primary">Revoke</p>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <hr className="my-2" />
        </div>
      </div>
    </>
  );
};
const UserProfileCard = ({
  img,
  badge,
  age,
  distance,
  location,
  name,
  type,
}) => {
  return (
    <div className=" w-full md:w-[210px] h-auto md:h-[296px] relative rounded-[16px]  overflow-hidden border-2 border-primary mb-5">
      <img
        src={img}
        alt=""
        className="w-full h-full aspect-[9/16] object-cover"
      />
      {type === "standard" ? (
        ""
      ) : (
        <img className="absolute top-0" src={badge} alt="" />
      )}
      <div className="absolute inset-0 bg-profile-gradient"></div>

      <div className="absolute inset-0 flex items-end mb-5 justify-center text-white z-10">
        <div className="text-center">
          <p className="font-semibold">
            {name} . {age}
          </p>
          <p className="text-sm">
            {location} . {distance}
          </p>
        </div>
      </div>
    </div>
  );
};
const SettingsTabCard = ({ data, icon, name, handleClick }) => {
  return (
    <>
      <div
        className="flex justify-between text-[#272829] py-3 lg:py-6 cursor-pointer"
        onClick={() => {
          handleClick(data);
        }}
      >
        <div className="flex gap-3">
          <span>{icon}</span>
          <span>{name}</span>
        </div>
        <div>
          <FaChevronRight />
        </div>
      </div>
      <hr />
    </>
  );
};
const SettingsIconsCard = ({ title, color, colorCode, action, icon }) => {
  return (
    <>
      <div>
        <div className="flex justify-between items-center gap-3 py-3">
          <div className="flex items-center gap-3">
            <span
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: colorCode }}
            >
              {icon && icon}
            </span>
            <div className="flex flex-col">
              <span className="text-[14px] font-semibold">{title}</span>
              <span className="text-[12px]">{color}</span>
            </div>
          </div>
          <div>
            <span className="text-[14px] font-semibold text-primary">
              {action}
            </span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export {
  FriendListCard,
  ProfileFriendsListCard,
  SettingsIconsCard,
  SettingsTabCard,
  UserProfileCard,
};
