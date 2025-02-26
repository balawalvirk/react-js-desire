import { CiLocationOn } from "react-icons/ci";
import { PiPencilSimpleLight } from "react-icons/pi";
import { RxChevronLeft } from "react-icons/rx";
import image from "../../../assets/images/profileImage.png";
import { useState } from "react";
import { Badge } from "../../../components/badge/Badges";
import ProfileActionButton from "../../../components/buttons/ProfileActionButton";
import VerifyProfileModal from "../../../components/models/settingsModals/VerifyProfileModal";
import EditProfileModal from "../../../components/models/settingsModals/EditProfileModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProfileInformation = ({ setSelectedView }) => {
  const user = useSelector((state) => state.user);
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const navigate = useNavigate();
  const profileData = {
    gender: "Male",
    availableFor: "Girls",
    age: 25,
    nationality: "USA",
    ethnicity: "Caucasian",
    chest: "110 cm",
    waist: "90 cm",
    hips: "110 cm",
    height: "189 cm",
    weight: "89 kg",
    hairLength: "Shoulder length",
    hairColor: "Blond",
    eyeColor: "Green",
    language: "Native",
    privatePictures: { request: 2, revoke: 3 },
  };
  return (
    <div className="">
      <VerifyProfileModal
        isOpen={modal}
        onClose={(prev) => {
          setModal(!prev);
        }}
      />
      <EditProfileModal
        isOpen={editModal}
        onClose={() => {
          setEditModal(!editModal);
        }}
      />
      <div
        className="mb-2 mt-2 mx-2 md:mb-0 size-10 md:size-12 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => {
          navigate(-1);
        }}
      >
        <RxChevronLeft size={30} />
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <img
          src={image}
          className="object-cover w-[235px]  rounded-2xl mb-5 "
          alt=""
        />

        <div className="flex justify-between items-center mb-5">
          <div className="space-y-1">
            <p className="text-3xl font-semibold">
              {user?.username ?? "Ethan Blake, 25"}
            </p>
            <p className="text-sm text-[#9EA1AE]">Professional Actor</p>
          </div>
          <div>
            <div
              className="size-10 md:size-12 border text-primary border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer"
              onClick={() => {
                setEditModal(true);
              }}
            >
              <PiPencilSimpleLight size={30} />
            </div>
          </div>
        </div>
        <div className="md:flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[18px] font-semibold">Location</p>
            <p className="text-sm text-[#9EA1AE]">
              {user?.placeOfResidence?.formatted_address ??
                "  2177 Marigold Lane, United States"}
            </p>
          </div>

          <div className="px-2 py-2 mb-4 md:mb-0 border text-secondary border-[#E8E6EA] rounded-full flex items-center justify-center">
            <CiLocationOn /> 12 km
          </div>
        </div>
        <div className="my-5">
          <ProfileActionButton
            btnTitle={"Verify Your Profile Now!"}
            cardTitle={"Verified users receive 4X as many messages"}
            handleClick={() => {
              setModal(true);
            }}
          />
        </div>
        <div className="mt-4">
          <h2 className="text-[16px] font-semibold mb-3">Private Pictures</h2>
          <div className="flex space-x-4">
            <div
              className="border border-[#E8E6EA] rounded-full px-3 py-2 text-sm mb-3 w-auto cursor-pointer"
              onClick={() => {
                setSelectedView("requests");
              }}
            >
              <p className="text-[#6A6A6A]">
                Request |{" "}
                <span className="text-primary">
                  {profileData.privatePictures.request}
                </span>
              </p>
            </div>
            <div
              className="border border-[#E8E6EA] rounded-full px-3 py-2 text-sm mb-3 w-auto cursor-pointer"
              onClick={() => {
                setSelectedView("revoke");
              }}
            >
              <p className="text-[#6A6A6A]">
                Revoke |{" "}
                <span className="text-primary">
                  {profileData.privatePictures.revoke}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <ProfileActionButton
            btnTitle={"Upload Pictures"}
            cardTitle={"You haven’t uploaded any pictures"}
          />
        </div>
        <div>
          <p className="text-[16px] font-semibold mb-3">About Me</p>
          <div className="flex flex-wrap  gap-x-2">
            <Badge
              label="Gender"
              value={profileData.gender}
              className={"w-auto"}
            />{" "}
            <Badge
              label="Available for"
              value={profileData.availableFor}
              className={"w-auto"}
            />
            <Badge label="Age" value={profileData.age} className={"w-auto"} />{" "}
            <Badge
              label="Nationality"
              value={profileData.nationality}
              className={"w-auto"}
            />
            <Badge
              label="Ethnicity"
              value={profileData.ethnicity}
              className={"w-auto"}
            />
            <Badge
              label="Chest"
              value={profileData.chest}
              className={"w-auto"}
            />
            <Badge
              label="Waist"
              value={profileData.waist}
              className={"w-auto"}
            />
            <Badge label="Hips" value={profileData.hips} className={"w-auto"} />
            <Badge
              label="Height"
              value={profileData.height}
              className={"w-auto"}
            />
            <Badge
              label="Weight"
              value={profileData.weight}
              className={"w-auto"}
            />
            <Badge
              label="Hair Length"
              value={profileData.hairLength}
              className={"w-auto"}
            />
            <Badge
              label="Hair Color"
              value={profileData.hairColor}
              className={"w-auto"}
            />
            <Badge
              label="Eye Color"
              value={profileData.eyeColor}
              className={"w-auto"}
            />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              My Language Skills
            </h2>
            <Badge
              label="English"
              value={profileData.language}
              className={"w-[140px]"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
