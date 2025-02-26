import React, { useRef, useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import female from "../../assets/svgs/female.svg";
import femaleWhite from "../../assets/svgs/femaleWhite.svg";
import male from "../../assets/svgs/male.svg";
import maleWhite from "../../assets/svgs/maleWhite.svg";
import transgender from "../../assets/svgs/transgender.svg";
import user from "../../assets/svgs/user.svg";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/inputs/FormInput";
import { Autocomplete } from "@react-google-maps/api";
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

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};
const PersonalInformation = ({ setTab, userData, setUserData }) => {
  const [selectedGender, setSelectedGender] = useState("Male");
  const [genderToSearch, setGenderToSearch] = useState("Female");

  const PersonalUserData = () => {
    setUserData({
      ...userData,
      genderToSearch: genderToSearch,
      selectedGender: selectedGender,
    });

    setTab("uploadImages");
  };

  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);

  const autocompleteRef = useRef(null);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
        formatted_address: place?.formatted_address,
      };
      setSelectedLocation(newLocation);
      setUserData({
        ...userData,
        placeOfResidence: newLocation,
      });
    }
  };
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
              value={userData.username}
              handleChange={(e) => {
                setUserData({
                  ...userData,
                  username: e.target.value,
                });
              }}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"13 jan 2021"}
              type={"date"}
              // icon={<img src={calendar} />}
              value={userData.dob}
              handleChange={(e) => {
                setUserData({
                  ...userData,
                  dob: e.target.value,
                });
              }}
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
            <label htmlFor="" className="font-medium">
              Place of Residence
            </label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (autocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handlePlaceSelect}
            >
              <input
                className="w-full rounded-full border border-[#F3F4F9] h-[50px] px-2 md:px-3"
                placeholder="Search a location"
                type="text"
              />
            </Autocomplete>
          </div>

          <Button
            text={"Next"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={PersonalUserData}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
