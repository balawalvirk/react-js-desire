import { IoMdClose } from "react-icons/io";
import Button from "../../buttons/Button";
import StandardModal from "../StandardModal";
import { SettingsIconsCard } from "../../card/Cards";
const icons = [
  { title: "Desires", color: "Red", action: "Choose", colorCode: "[#C61323]" },
  {
    title: "Desires VIP",
    color: "Black",
    action: "Choose",
    colorCode: "[#221831]",
  },
];

const VipIconModal = ({ isOpen, onClose }) => {
  return (
    <StandardModal size="xl" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-6">
        <div className=" space-y-3">
          <p className="text-xl font-bold">App Icons - VIP</p>
          <p className="text-secondary text-sm">
            As a VIP member, you not only stand out with a larger profile in the
            Desires app, but also on your smartphone. Only you as a VIP can
            choose from 2 different icons with a VIP logo.
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="mb-24">
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

export default VipIconModal;
