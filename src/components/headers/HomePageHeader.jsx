import React from "react";
import Icon from "../icons/Icon";
import boostIcon from "../../assets/images/boosticon.png";
import filtericon from "../../assets/images/filtericon.png";
import image from "../../assets/images/friend.png";
import { useNavigate } from "react-router-dom";
const HomePageHeader = ({ setFilterModal, setPositionModal }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-end gap-x-3">
      <Icon
        handleClick={() => setPositionModal(true)}
        icon={<img alt="" src={boostIcon} />}
      />
      <Icon
        handleClick={() => setFilterModal(true)}
        icon={<img alt="" src={filtericon} />}
      />
      <div
        className="size-10 rounded-full bg-black cursor-pointer"
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
