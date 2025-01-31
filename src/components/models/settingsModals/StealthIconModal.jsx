import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import { SettingsIconsCard } from "../../card/Cards";
const icons = [
  { title: "Champions League", action: "Buy", colorCode: "#C61323" },
  { title: "Flight Radar", action: "Buy", colorCode: "#221831" },
  { title: "Gym Tips", action: "Buy", colorCode: "#0866FF" },
  { title: "Health Care", action: "Buy", colorCode: "#DB9501" },
];
const StealthIconModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="xl" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-6">
        <div className=" space-y-3">
          <p className="text-xl font-bold">App Icons - Stealth Icons</p>
          <p className="text-secondary text-sm">
            As a Phantom or Celebrity member you have the opportunity to
            disguise the Desires app. You can choose from 10 different topics.
            The app icon changes, as well as the app name. This means you can
            install Desires completely discreetly on your smartphone.
          </p>
          <p className="text-secondary text-sm">
            During your Phantom or celebrity membership, all ICONS are free for
            you. If you are not yet Phantom or Celebrity member, each ICON costs
            10 Coins.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-3">
        {icons?.map((i, index) => {
          return (
            <SettingsIconsCard
              color={i?.color}
              action={i?.action}
              title={i?.title}
              colorCode={i?.colorCode}
            />
          );
        })}
      </div>

      <Button
        text={"Reset"}
        btnClassName={
          "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
        }
      />
    </StandardModal>
  );
};

export default StealthIconModal;
