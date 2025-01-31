import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import verifyImage from "../../../assets/images/verify.png";
import { useState } from "react";
const StepOne = ({ onClose }) => {
  return (
    <>
      <div className="flex flex-col w-full mb-6">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold">Verification</p>
          <button onClick={onClose} className="text-black">
            <IoMdClose className="h-8 w-8" />
          </button>
        </div>
        <p className="text-secondary text-sm w-[80%]">
          Please take a selfie with the gesture shown in the picture
        </p>
      </div>

      <div className="mb-48">
        <img
          src={verifyImage}
          className="h-48 w-52 rounded-xl aspect-square"
          alt=""
        />
      </div>
    </>
  );
};
const StepTwo = ({ onClose }) => {
  return (
    <>
      <div className="flex flex-col w-full mb-6">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold">Verification</p>
          <button onClick={onClose} className="text-black">
            <IoMdClose className="h-8 w-8" />
          </button>
        </div>
        <p className="text-secondary text-sm w-[80%]">
          Are you ready for Verifications ?
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-x-2 mb-48">
        <img
          src={verifyImage}
          className="w-full rounded-xl aspect-square"
          alt=""
        />
        <img
          src={verifyImage}
          className="w-full rounded-xl aspect-square"
          alt=""
        />
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
