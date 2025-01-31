import { IoMdClose } from "react-icons/io";
import Button from "../../../buttons/Button";
import StandardModal from "../../StandardModal";

const interestsData = [
  {
    title: "Travel",
    data: [
      "Asia",
      "Camping",
      "Scandinavia",
      "Mountains",
      "Sea",
      "5 stars",
      "Middle East",
      "City trips",
      "Africa",
      "Holiday home",
      "Air travel",
      "Hotel",
    ],
  },
  {
    title: "Sport",
    data: [
      "Baseball",
      "Ballet",
      "Hockey",
      "Karate",
      "Soccer",
      "Pilates",
      "Snowboarding",
      "Judo",
      "Sport shooting",
      "Sailing",
      "Volleyball",
    ],
  },
  {
    title: "Drinks",
    data: ["Coffee", "Cocktails", "Tom Collins"],
  },
];

const InterestsModal = ({ isOpen, onClose, selectedInterests, onSelect }) => {
  console.log("✌️selectedInterests --->", selectedInterests);
  const handleSelect = (category, item) => {
    onSelect(category, item);
  };

  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-6">
        <p className="text-xl font-bold">Interests</p>
        <button onClick={onClose} className="text-black">
          <IoMdClose className="h-8 w-8" />
        </button>
      </div>
      {interestsData?.map((category) => (
        <div className="mb-3" key={category?.title}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-semibold">{category?.title}</p>
            <span className="text-sm text-gray-500">{`${
              selectedInterests[category.title]?.length || 0
            }/${category.data.length}`}</span>
          </div>
          <div className="flex flex-wrap">
            {category?.data.map((item) => (
              <button
                key={item}
                className={`rounded-full border text-[14px] border-lightSecondary px-3 py-2 m-1 ${
                  selectedInterests[category.title]?.includes(item)
                    ? "bg-black text-white shadow-lg"
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

export default InterestsModal;
