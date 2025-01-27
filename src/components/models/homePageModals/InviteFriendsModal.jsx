import React from "react";
import StandardModal from "../StandardModal";
import { IoMdClose } from "react-icons/io";
import FormInput from "../../inputs/FormInput";
import { MdEmail } from "react-icons/md";
import Button from "../../buttons/Button";
import qrcode from "../../../assets/images/qrcode.png";
const InviteFriendsModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <div className="w-[80%] space-y-3">
            <p className="text-xl font-bold">Invite Friends</p>
            <p className="text-secondary text-sm">
              Here you can generate a QR code to refer a person. The person cal
              scan it or receive the invitation by e-mail.
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div>
          <FormInput
            inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
            className={"space-y-2"}
            placeholder={"dean@dexxire.co |"}
            type={"text"}
            icon={<MdEmail />}
            label={"Email"}
          />
          <Button
            text={"Send Invite"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
          />
          <div className="flex justify-center items-center mb-4">
            <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
            <span className="text-[#9EA1AE] text-sm">or </span>
            <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
          </div>
          <div className="flex justify-center items-center">
            <img src={qrcode} alt="" />
          </div>
        </div>
      </div>
    </StandardModal>
  );
};

export default InviteFriendsModal;
