import { CiLocationOn } from "react-icons/ci";
import { PiPencilSimpleLight } from "react-icons/pi";
import { RxChevronLeft } from "react-icons/rx";
import image from "../../../assets/images/image.jpeg";
import { useState } from "react";
import { Badge } from "../../../components/badge/Badges";
import ProfileActionButton from "../../../components/buttons/ProfileActionButton";
import VerifyProfileModal from "../../../components/models/settingsModals/VerifyProfileModal";
import EditProfileModal from "../../../components/models/settingsModals/EditProfileModal";
const ProfileInformation = ({ setSelectedView }) => {
  const [modal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
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
    <div className="p-3 lg:p-5">
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
      <div className="size-12 border border-[#E8E6EA] rounded-full flex items-center justify-center">
        <RxChevronLeft size={30} />
      </div>
      <div className="w-1/2 mx-auto">
        <img src={image} className="size-52 rounded-2xl mb-5" alt="" />

        <div className="flex justify-between items-center mb-5">
          <div className="space-y-1">
            <p className="text-3xl font-semibold">Ethan Blake, 25</p>
            <p className="text-sm text-[#9EA1AE]">Professional Actor</p>
          </div>
          <div>
            <div
              className="size-12 border text-primary border-[#E8E6EA] rounded-full flex items-center justify-center"
              onClick={() => {
                setEditModal(true);
              }}
            >
              <PiPencilSimpleLight size={30} />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-[18px] font-semibold">Location</p>
            <p className="text-sm text-[#9EA1AE]">
              2177 Marigold Lane, United States
            </p>
          </div>
          <div>
            <div className="px-2 py-2 border text-secondary border-[#E8E6EA] rounded-full flex items-center justify-center">
              <CiLocationOn /> 12 km
            </div>
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
        <div>
          <p className="text-[16px] font-semibold mb-3">About Me</p>
          <div className="grid grid-cols-3 gap-x-2">
            <Badge label="Gender" value={profileData.gender} />{" "}
            <Badge label="Available for" value={profileData.availableFor} />
            <Badge label="Age" value={profileData.age} />{" "}
            <Badge label="Nationality" value={profileData.nationality} />
            <Badge label="Ethnicity" value={profileData.ethnicity} />
            <Badge label="Chest" value={profileData.chest} />
            <Badge label="Waist" value={profileData.waist} />
            <Badge label="Hips" value={profileData.hips} />
            <Badge label="Height" value={profileData.height} />
            <Badge label="Weight" value={profileData.weight} />
            <Badge label="Hair Length" value={profileData.hairLength} />
            <Badge label="Hair Color" value={profileData.hairColor} />
            <Badge label="Eye Color" value={profileData.eyeColor} />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold mb-3">
              My Language Skills
            </h2>
            <Badge label="English" value={profileData.language} />
          </div>
          <div>
            <h2 className="text-[16px] font-semibold mb-3">Private Pictures</h2>
            <div className="flex space-x-4">
              <Badge
                label="Request"
                value={profileData.privatePictures.request}
                handleClick={() => {
                  setSelectedView("requests");
                }}
              />
              <Badge
                label="Revoke"
                value={profileData.privatePictures.revoke}
                handleClick={() => {
                  setSelectedView("revoke");
                }}
              />
            </div>
          </div>
          <div>
            <p className="text-[18px] font-semibold mb-3">Private Pictures</p>
            <ProfileActionButton
              btnTitle={"Upload Pictures"}
              cardTitle={"You haven’t uploaded any pictures"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInformation;
