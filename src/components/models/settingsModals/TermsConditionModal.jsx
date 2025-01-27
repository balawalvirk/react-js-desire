import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";

const TermsConditionModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="xl" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-2">
        <p className="text-xl font-bold">Terms & Conditions</p>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <p className="text-sm">
        General Terms and Conditions of the DESIRES app <br />
        Valid version November 22, 2024
      </p>
      <div className="text-[14px] ">
        <p className="text-primary font-semibold text-sm mb-3">Introduction</p>
        <p className="text-sm mb-3  text-[#272829]">
          By accessing the DESIRES app and the connected websites (hereinafter
          referred to as "websites"), you agree to these terms of use and the
          privacy policy (https://desires.app/privacy-policy). The general terms
          and conditions consist of 5 essential parts:
        </p>
        <p>
          1. Community Guidelines <br />
          II. DESIRES User Agreement <br />
          III. Legal terms of use <br />
          IV. Terms and conditions for messages <br />
          V. EULA - Licensed Application End User License Agreement (Apple
          AppStore)
        </p>

        <p className="my-4">
          By registering with DESIRES you agree to all terms and conditions. A
          violation can lead to immediate exclusion from our community. <br />
          1. COMMUNITY GUIDELINESOur community thrives on honesty, friendliness
          and respect. We want to create a space in which users can express
          themselves freely as long as they do not insult or harass others. At
          DESIRES, everyone is valued equally. Please be considerate, think
          before you act, and abide by our Community Guidelines.
        </p>
        <p className="text-primary font-semibold text-sm mb-3 ">
          Prohibited behavior
        </p>
        <div className="text-[#272829] mb-2">
          <p>1. Profile picture</p>
          <p className="mb-3">The personal data we collect includes:</p>

          <p className="mb-3">
            The profile picture must be a picture of yourself. You should be
            clearly recognizable, i.e. your face should be visible. If you are
            concerned about your privacy. book an invisible membership. These
            have been specially developed for this case and make you invisible.
            You see every member, but you are.
          </p>
        </div>
      </div>
    </StandardModal>
  );
};

export default TermsConditionModal;
