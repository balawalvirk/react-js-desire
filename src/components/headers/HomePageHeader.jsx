import React from "react";
import Icon from "../icons/Icon";
import boostIcon from "../../assets/images/boosticon.png";
import filtericon from "../../assets/images/filtericon.png";
import image from "../../assets/images/friend.png";
import { useNavigate } from "react-router-dom";
const HomePageHeader = ({ setFilterModal, setPositionModal }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end gap-x-3 relative mb-12">
      <Icon
        className={"absolute right-16 z-30 bg-white"}
        handleClick={() => setPositionModal(true)}
        icon={<img alt="" src={boostIcon} />}
      />
      <Icon
        className={"absolute right-8 bg-white z-20"}
        handleClick={() => setFilterModal(true)}
        icon={<img alt="" src={filtericon} />}
      />
      <div
        className="size-10 absolute rounded-full bg-black cursor-pointer"
        onClick={() => {
          navigate("/admin/profile");
        }}
      >
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default HomePageHeader;
