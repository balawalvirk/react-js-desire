import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import StandardModal from "../StandardModal";
import SwitchToggle from "../../inputs/SwitchToggle";
import { useState } from "react";
import LanguageModal from "./LanguageModal";
import AccessModal from "./AccessModal";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import TermsConditionModal from "./TermsConditionModal";
import VipIconModal from "./VipIconModal";
import StealthIconModal from "./StealthIconModal";

const notifications = [
  "Chats",
  "Friend Requests",
  "Likes",
  "Audio & Video Call",
];

const privacy = [
  { title: "Privacy Policy", tab: "1" },
  { title: "Terms & Conditions", tab: "2" },
  { title: "Access", tab: "3" },
];
const icons = [
  { title: "VIP", tab: "1" },
  { title: "Stealth Icons", tab: "2" },
];
const units = [
  { unit: "KM", tab: "1", title: "Distance" },
  { unit: "CM", tab: "2", title: "Length" },
  { unit: "KG", tab: "3", title: "Weight" },
];
const AppSettingsModal = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState("");
  const [icontab, setIconTab] = useState("");
  const [modal, setModal] = useState(false);
  const [langModal, setLangModal] = useState(false);

  const [toggles, setToggles] = useState(
    notifications.reduce((acc, notification) => {
      acc[notification] = false;
      return acc;
    }, {})
  );

  const handleToggleChange = (notification) => {
    setToggles((prev) => ({
      ...prev,
      [notification]: !prev[notification],
    }));
  };

  const renderModal = () => {
    switch (tab) {
      case "1":
        return (
          <PrivacyPolicyModal
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
          />
        );
      case "2":
        return (
          <TermsConditionModal
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
          />
        );
      case "3":
        return (
          <AccessModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
        );
      default:
        break;
    }
  };
  const renderIconModal = () => {
    switch (icontab) {
      case "1":
        return (
          <VipIconModal
            isOpen={modal}
            onClose={(prev) => {
              setModal(!prev);
              setIconTab("");
            }}
          />
        );
      case "2":
        return (
          <StealthIconModal
            isOpen={modal}
            onClose={(prev) => {
              setModal(!prev);
              setIconTab("");
            }}
          />
        );

      default:
        break;
    }
  };
  return (
    <>
      <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
        {renderModal()}
        {renderIconModal()}
        <LanguageModal
          isOpen={langModal}
          onClose={(prev) => setLangModal(!prev)}
        />
        <div>
          <div className="flex justify-between mb-6">
            <div className="w-[80%] space-y-3">
              <p className="text-xl font-bold">App Settings</p>
              <p className="text-secondary text-sm">
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
          <div className=" space-y-4">
            <div>
              <label className="mx-2 text-sm font-medium">Language</label>
              <div
                className="border border-lightSecondary rounded-full cursor-pointer"
                onClick={() => {
                  onClose();
                  setLangModal(true);
                }}
              >
                <div className="text-secondary flex justify-between p-3 items-center">
                  <p className="text-sm">English</p>
                  <FaChevronRight size={10} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="mx-2 text-sm font-medium">
                Audio & Video Call
              </label>
              <div className="border border-lightSecondary rounded-full ">
                <div className="text-secondary flex justify-between p-3 items-center">
                  <p className="text-sm">Not Activate</p>
                  <SwitchToggle />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="mx-2 text-sm font-medium">Around Me</label>
              <div className="border border-lightSecondary rounded-full ">
                <div className="text-secondary flex justify-between p-3 items-center">
                  <p className="text-sm">Show me </p>
                  <SwitchToggle />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="mx-2 text-sm font-medium">Notifications</label>
              {notifications.map((notification) => (
                <div
                  key={notification}
                  className="border border-lightSecondary rounded-full p-3 flex items-center justify-between mt-3"
                >
                  <p className="text-sm text-secondary">{notification}</p>
                  <SwitchToggle
                    isChecked={toggles[notification]}
                    onChange={() => handleToggleChange(notification)}
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="mx-2 text-sm font-medium">App Icons</label>
              {icons?.map((i) => {
                return (
                  <div
                    className="border border-lightSecondary rounded-full mb-3 mt-3"
                    onClick={() => {
                      setIconTab(i?.tab);
                      onClose();
                      setModal(true);
                    }}
                  >
                    <div className="text-secondary flex justify-between p-3 items-center">
                      <p className="text-sm">{i?.title}</p>
                      <FaChevronRight size={10} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <label className="mx-2 text-sm font-medium">Units</label>
              {units?.map((i) => {
                return (
                  <div className="border border-lightSecondary rounded-full mb-3 mt-3 ">
                    <div className="text-secondary flex justify-between p-3 items-center">
                      <p className="text-sm">{i?.title}</p>
                      <div className="flex items-center gap-x-2">
                        <select name="" id="">
                          <option value="">Km</option>
                          <option value="">Cm</option>
                          <option value="">Inch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <label className="mx-2 text-sm font-medium">Privacy</label>
              {privacy?.map((i) => {
                return (
                  <div
                    className="border border-lightSecondary rounded-full mb-3 mt-3"
                    onClick={() => {
                      setTab(i?.tab);
                      onClose();
                      setModal(true);
                    }}
                  >
                    <div className="text-secondary flex justify-between p-3 items-center">
                      <p className="text-sm">{i?.title}</p>
                      <FaChevronRight size={10} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </StandardModal>
    </>
  );
};

export default AppSettingsModal;
