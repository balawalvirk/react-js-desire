import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import verifyImage from "../../../assets/images/verify.png";
import { useState } from "react";
const StepOne = ({ onClose }) => {
  return (
    <>
      <div className="w-[80%] space-y-2 mb-5">
        <p className="text-xl font-bold">Verification</p>
        <p className="text-secondary text-sm">
          Please take a selfie with the gesture shown in the picture
        </p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <IoMdClose className="h-6 w-6" />
      </button>

      <div className="mb-20">
        <img src={verifyImage} className="h-44 w-56 rounded-xl" alt="" />
      </div>
    </>
  );
};
const StepTwo = ({ onClose }) => {
  return (
    <>
      <div className="w-[80%] space-y-2 mb-5">
        <p className="text-xl font-bold">Verification</p>
        <p className="text-secondary text-sm">
          Are you ready for Verifications ?
        </p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <IoMdClose className="h-6 w-6" />
      </button>

      <div className="mb-20 grid grid-cols-2">
        <img src={verifyImage} className="h-44 w-56 rounded-xl" alt="" />{" "}
        <img src={verifyImage} className="h-44 w-56 rounded-xl" alt="" />
      </div>
    </>
  );
};
const VerifyProfileModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState(0);
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      {tab === 0 ? (
        <StepOne onClose={onClose} setTab={setTab} />
      ) : (
        <StepTwo onClose={onClose} setTab={setTab} />
      )}
      <Button
        text={tab === 0 ? "Start Camera" : "Send"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
        }
        handleClick={() => {
          if (tab === 0) {
            setTab((prev) => prev + 1);
          } else if (tab === 1) {
            setTab(0);
            onClose();
          }
        }}
      />
      <p
        className="text-center text-primary cursor-pointer"
        onClick={() => {
          onClose();
        }}
      >
        Cancel
      </p>
    </StandardModal>
  );
};

export default VerifyProfileModal;
