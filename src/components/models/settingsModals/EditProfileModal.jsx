import { useState } from "react";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import Aboutme from "./EditModalSections/Aboutme";
import MyDetails from "./EditModalSections/MyDetails";
import MyPictures from "./EditModalSections/MyPictures";
import { IoMdClose } from "react-icons/io";

const Stepper = ({ view }) => {
  const steps = [
    {
      step: 1,
      title: "My Pictures",
    },
    {
      step: 2,
      title: "My Details",
    },
    {
      step: 3,
      title: "About Me",
    },
  ];
  return (
    <ul className="relative flex justify-between w-full ">
      {steps?.map((i, index) => {
        return (
          <li
            className={`  group ${steps?.length - 1 ? "justify-end" : ""}`}
            key={index}
          >
            <div className="min-w-7 min-h-7 w-full inline-flex items-center justify-start text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center shrink-0 ${
                  view === i?.step ? "bg-primary text-white" : "bg-gray-200"
                } font-medium  rounded-full `}
              >
                {i?.step}
              </span>
              <div
                className={`ms-2 w-[155px] h-px  group-last:hidden ${
                  view === i?.step ? "bg-primary  " : "bg-gray-200"
                }`}
              ></div>
            </div>
            <div className="mt-3">
              <span
                className={`block  text-[12px] font-medium  ${
                  view === i?.step ? "text-primary " : "text-gray-800"
                }`}
              >
                {i?.title}
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
const EditProfileModal = ({ isOpen, onClose }) => {
  let [view, setView] = useState(1);

  const renderItems = () => {
    switch (view) {
      case 1:
        return <MyPictures />;
      case 2:
        return <MyDetails />;
      case 3:
        return <Aboutme onClose={onClose} />;
      default:
        break;
    }
  };
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-[80%] ">
          <p className="text-[20px] font-bold">Edit Profile</p>
        </div>
        <button onClick={onClose} className=" text-black">
          <IoMdClose className="h-8 w-8" />
        </button>
      </div>
      <div className="my-8">
        <Stepper view={view} />
      </div>
      <div>{renderItems()}</div>
      <Button
        text={"Save"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
        }
        handleClick={() => {
          setView((prev) => prev + 1);
        }}
      />
    </StandardModal>
  );
};

export default EditProfileModal;
