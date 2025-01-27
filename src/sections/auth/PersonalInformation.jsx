import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/inputs/FormInput";
import { FaCalendar, FaUser } from "react-icons/fa";
import { IoIosFemale, IoIosMale, IoIosTransgender } from "react-icons/io";
const category = [
  {
    gender: "Male",
    icon: <IoIosMale size={20} />,
  },
  {
    gender: "Female",
    icon: <IoIosFemale size={20} />,
  },
  {
    gender: "Trans",
    icon: <IoIosTransgender size={20} />,
  },
];
const PersonalInformation = ({ setTab }) => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [genderToSearch, setGenderToSearch] = useState("Female");
  return (
    <div>
      <div>
        <div className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
          <RxChevronLeft size={30} onClick={() => setTab("SignUp")} />
        </div>
      </div>
      <div className="mt-6 lg:mt-10">
        <div className="mb-8">
          <h2 className="text-[18px] lg:text-[30px] font-semibold">
            Personal info
          </h2>
          <p className="text-[#6A6A6A] text-sm lg:text-[18px]">
            Enter the following info to complete your profile
          </p>
        </div>
        <div className="max-w-full lg:max-w-[80%]">
          <div className="space-y-4 mb-5">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"username"}
              type={"text"}
              icon={<FaUser />}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"13 jan 2021"}
              type={"text"}
              icon={<FaCalendar />}
            />
          </div>
          <div className="mb-3 space-y-3">
            <p className="font-medium">Gender</p>
            <div className="grid lg:grid-cols-3 gap-x-4 ">
              {category?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setSelectedGender(item?.gender);
                    }}
                    className={`flex items-center mb-3 lg:mb-0  gap-x-3 justify-center rounded-full cursor-pointer py-3  ${
                      selectedGender === item?.gender
                        ? "bg-red-600 text-white"
                        : "bg-white text-black border border-[#F3F4F9]"
                    }`}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.gender}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mb-3 space-y-3">
            <p className="font-medium">Choose who to search for</p>
            <div className="grid lg:grid-cols-3 gap-x-4 ">
              {category?.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setGenderToSearch(item?.gender);
                    }}
                    className={`flex items-center mb-3 lg:mb-0   gap-x-3 justify-center rounded-full cursor-pointer py-3 ${
                      genderToSearch === item?.gender
                        ? "bg-red-600 text-white"
                        : "bg-white text-black border border-[#F3F4F9]"
                    }`}
                  >
                    <span>{item?.icon}</span>
                    <span>{item?.gender}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Place of Residence"}
              label={"Place of Residence"}
              type={"text"}
              labelClassName={"font-medium"}
            />
          </div>

          <Button
            text={"Next"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => setTab("uploadImages")}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
