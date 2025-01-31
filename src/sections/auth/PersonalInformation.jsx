import React, { useState } from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import male from "../../assets/svgs/male.svg";
import female from "../../assets/svgs/female.svg";
import transgender from "../../assets/svgs/transgender.svg";
import maleWhite from "../../assets/svgs/maleWhite.svg";
import femaleWhite from "../../assets/svgs/femaleWhite.svg";
import user from "../../assets/svgs/user.svg";
import calendar from "../../assets/svgs/calendar.svg";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/inputs/FormInput";
const category = [
  {
    gender: "Male",
    icon1: <img src={male} />,
    icon2: <img src={maleWhite} />,
  },
  {
    gender: "Female",
    icon1: <img src={female} />,
    icon2: <img src={femaleWhite} />,
  },
  {
    gender: "Trans",
    icon1: <img src={transgender} />,
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
              icon={<img src={user} />}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"13 jan 2021"}
              type={"text"}
              icon={<img src={calendar} />}
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
                    <span>
                      {selectedGender === item?.gender
                        ? item?.icon2
                        : item?.icon1}
                    </span>
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
                    <span>
                      {genderToSearch === item?.gender
                        ? item?.icon2
                        : item?.icon1}
                    </span>
                    <span>{item?.gender}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Enter Residence"}
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
