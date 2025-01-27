import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";
import Button from "../../buttons/Button";

const AccessModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-6">
        <div className="w-[80%] space-y-3">
          <p className="text-xl font-bold">Access</p>
          <p className="text-secondary text-sm">2 Factor Authentication</p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="mb-3">
        <p className="text-center">Email: dean@dexxire.com</p>
      </div>
      <Button
        text={"Update Email"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
        }
      />
      <Button
        text={"Change Password"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
        }
      />

      <p className="mt-40 text-center text-primary font-semibold">
        Delete My Profile
      </p>
    </StandardModal>
  );
};

export default AccessModal;
