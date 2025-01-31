import { IoMdClose } from "react-icons/io";
import Button from "../../../buttons/Button";
import StandardModal from "../../StandardModal";

const moreInfos = [
  {
    title: "Sex Type",
    data: [
      "Active",
      "Voyer",
      "Sensual",
      "Energetic",
      "Anytime",
      "Role Play",
      "Abstinent",
      "BDSM",
      "Group",
      "Public",
      "Swinger",
    ],
  },
  {
    title: "Relationship Type",
    data: ["Polygamy", "Open Relationship", "Monogamy"],
  },
  {
    title: "Score Point",
    data: [
      "Show me your dirty Side",
      "Make me dream",
      "You give compliments",
      "You Kiss well",
      "Entertain me",
    ],
  },
];

const MoreInfosModal = ({ isOpen, onClose, selectedItemsInfo, onSelect }) => {
  const handleSelect = (category, item) => {
    onSelect(category, item);
  };

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-4 ">
        <p className="text-xl font-bold">More Info</p>
        <button onClick={onClose} className=" text-black">
          <IoMdClose className="h-8 w-8" />
        </button>
      </div>
      {moreInfos.map((category) => (
        <div className="mb-3" key={category.title}>
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold mb-2 flex items-center">
              {category.title}
            </p>
            <span className="text-sm text-gray-500">{`${
              selectedItemsInfo[category.title]?.length || 0
            }/${category.data.length}`}</span>
          </div>
          <div className="flex flex-wrap">
            {category.data.map((item) => (
              <button
                key={item}
                className={`rounded-full border text-[14px] border-lightSecondary px-3 py-2 m-1 ${
                  selectedItemsInfo[category.title]?.includes(item)
                    ? "bg-black text-white"
                    : ""
                }`}
                onClick={() => handleSelect(category.title, item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
      <Button
        text={"Add"}
        btnClassName="rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
      />
    </StandardModal>
  );
};

export default MoreInfosModal;
