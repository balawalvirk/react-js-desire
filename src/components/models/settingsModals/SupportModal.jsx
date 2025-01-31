import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import FormInput from "../../inputs/FormInput";
import StandardModal from "../StandardModal";
import Button from "../../buttons/Button";

const SupportModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex items-center justify-between mb-4 lg:mb-6">
          <div className="w-full lg:w-[80%] space-y-3">
            <p className="text-lg lg:text-xl font-bold">Support</p>
            <p className="text-secondary text-xs lg:text-sm">
              If you need help or have any questions, send us an email and we
              will respond to you promptly.
            </p>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>
        <div className=" space-y-2">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Reference
          </label>
          <select
            name=""
            id=""
            className="border  w-full mb-3 mt-3 py-3 px-5 block  border-gray-200 rounded-full text-sm text-gray-400"
          >
            <option value="">Select reference</option>
            <option value="">option1</option>
            <option value="">option2</option>
            <option value="">option3</option>
          </select>

          <div className="space-y-2">
            <label className="font-medium text-[14px] mx-2">Message</label>
            <textarea
              className={
                "w-full border border-1 border-lightSecondary text-sm  rounded-lg h-36 p-3"
              }
              placeholder={"Write your message here"}
              type={"textarea"}
              label={"Message"}
            />
          </div>
        </div>
        <Button
          text={"Send"}
          btnClassName={
            "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
          }
        />
      </div>
    </StandardModal>
  );
};

export default SupportModal;
