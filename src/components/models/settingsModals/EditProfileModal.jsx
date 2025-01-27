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
    <ul className="relative flex w-full gap-x-2 ">
      {steps?.map((i, index) => {
        return (
          <li className="shrink basis-0 flex-1  group" key={index}>
            <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
              <span
                className={`size-7 flex justify-center items-center shrink-0 ${
                  view === i?.step ? "bg-primary text-white" : "bg-gray-200"
                } font-medium  rounded-full `}
              >
                {i?.step}
              </span>
              <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden "></div>
            </div>
            <div className="mt-3">
              <span
                className={`block text-[12px] font-medium  ${
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
      <div className="flex justify-between mb-6">
        <div className="w-[80%] ">
          <p className="text-[20px] font-bold">Edit Profile</p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="my-3">
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
