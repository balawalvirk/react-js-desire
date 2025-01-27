import { IoMdClose } from "react-icons/io";
import SwipeToPayButton from "../../buttons/SwipeToPayButton";
import StandardModal from "../StandardModal";

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="xl" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-2">
        <p className="text-xl font-bold">Privacy Policy</p>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="text-[14px] ">
        <p className="text-primary font-semibold text-sm mb-3">
          Privacy Policy of DESIRES App Inc
        </p>
        <p className="text-sm mb-3  text-[#272829]">
          Effective Version: 22.11.2024 This Privacy Policy explains how DESIRES
          App Inc. (hereinafter "we", "us", or "DESIRES") collects, uses,
          stores, and shares personal and non-personal data of users
          (hereinafter "users" or "you") of the DESIRES App and associated
          websites (hereinafter "Website" and "App"). We respect your privacy
          and are committed to protecting your data. This Privacy Policy applies
          to all products and services offered by DESIRES, including the Website
          and the App.
        </p>
        <p className="text-primary font-semibold text-sm mb-3 ">
          1. Collection of Personal Data
        </p>
        <div className="text-[#272829] mb-2">
          <p>
            We collect personal data in various ways to provide and improve our
            services. This data may be collected through our iOS and Android
            apps as well as through the Website.
          </p>
          <p className="mb-3">The personal data we collect includes:</p>

          <p className="mb-3">
            Name: Your full name provided during registration or through
            interactions with the App and Website.
          </p>
          <p className="mb-3">
            Username: The name you choose to identify yourself within the App or
            on the Website.
          </p>
          <p className="mb-3">
            Email Address: The email address you provide during registration or
            for communication with us.
          </p>
          <p className="mb-3">
            Phone Number: Your phone number, which you provide during
            registration or to use certain features (e.g., SMS notifications).
          </p>
          <p className="mb-3">
            Location Data: We may collect your location if you enable this
            feature in the settings of your App to offer geo-specific features
            or personalize certain.
          </p>
          <p className="mb-3">
            Name: Your full name provided during registration or through
            interactions with the App and Website.
          </p>
        </div>
      </div>
    </StandardModal>
  );
};

export default PrivacyPolicyModal;
