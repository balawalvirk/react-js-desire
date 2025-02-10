import { IoMdClose } from "react-icons/io";
import Button from "../../../buttons/Button";
import StandardModal from "../../StandardModal";

const lifeStyle = [
  {
    title: "Social Media",
    data: ["Without me", "Active", "Influencer"],
  },
  {
    title: "Smoking",
    data: ["Smoker", "Just Quit", "Non Smoker"],
  },
  {
    title: "Party Type",
    data: [
      "Best Daily",
      "Better to Watch",
      "Party Animal",
      "No Dancing",
      "Chilling",
      "Occasionally",
      "All In",
      "Party Pooper",
      "Loud & Intense",
    ],
  },
  {
    title: "Nutrition",
    data: ["Vegan", "Love Meat"],
  },
];

const LifeStyleModal = ({ isOpen, onClose, selectedItems, onSelect }) => {
  const handleSelect = (category, item) => {
    onSelect(category, item);
  };

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-bold">LifeStyle</p>
        <button onClick={onClose} className="text-black">
          <IoMdClose className="h-8 w-8" />
        </button>
      </div>
      {lifeStyle.map((category) => (
        <div className="mb-3" key={category.title}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-semibold">{category?.title}</p>
            <span className="text-sm text-gray-500">{`${
              selectedItems[category.title]?.length || 0
            }/${category.data.length}`}</span>
          </div>
          <div className="flex flex-wrap">
            {category.data.map((item) => (
              <button
                key={item}
                className={`rounded-full border text-[14px] border-lightSecondary px-3 py-2 m-1 ${
                  selectedItems[category.title]?.includes(item)
                    ? "bg-[#272829] shadow-custom text-white"
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

export default LifeStyleModal;
