import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import MoreInfosModal from "./MoreInfosModal";
import InterestsModal from "./InterestsModal";
import ILoveModal from "./ILoveModal";
import LifeStyleModal from "./LifeStyleModal";
import { IoMdClose } from "react-icons/io";
const about = [
  {
    title: "Who I Am?",
    tabs: [
      {
        text: "Infos",
        selected: "4",
        modal: "info",
      },
      {
        text: "Lifestyle",
        selected: "2",
        modal: "lifeStyle",
      },
    ],
  },
  {
    title: "Who do I Love?",
    tabs: [
      {
        text: "Interests",
        selected: "0",
        modal: "interests",
      },
      {
        text: "I Love",
        selected: "5",
        modal: "iLove",
      },
    ],
  },
];
const Aboutme = ({ onClose }) => {
  const [selectedTab, setSelectedTab] = useState();
  const [modal, setModal] = useState(false);
  const [selectedILoveItems, setSelectedILoveItems] = useState({
    media: [],
    fashion: [],
    cars: [],
  });

  const handleSelectILoveItems = (category, item) => {
    setSelectedILoveItems((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), item],
    }));
  };
  const [selectedItemsInfo, setSelectedItemsInfo] = useState({
    sexType: [],
    relationshipType: [],
    scorePoint: [],
  });
  const [selectedItemsLifeStyle, setSelectedItemsLifeStyle] = useState({
    socialMedia: [],
    smoking: [],
    partyType: [],
    nutrition: [],
  });
  const [selectedInterests, setSelectedInterests] = useState({
    travel: [],
    sport: [],
    drinks: [],
  });

  const handleSelectInterests = (category, item) => {
    setSelectedInterests((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), item],
    }));
  };
  const handleSelectLifeStyle = (category, item) => {
    setSelectedItemsLifeStyle((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), item],
    }));
  };

  const handleSelectMoreInfo = (category, item) => {
    setSelectedItemsInfo((prevSelectedItems) => ({
      ...prevSelectedItems,
      [category]: [...(prevSelectedItems[category] || []), item],
    }));
  };
  const renderModal = () => {
    switch (selectedTab) {
      case "info":
        return (
          <MoreInfosModal
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
            selectedItemsInfo={selectedItemsInfo}
            onSelect={handleSelectMoreInfo}
          />
        );
      case "lifeStyle":
        return (
          <LifeStyleModal
            selectedItems={selectedItemsLifeStyle}
            onSelect={handleSelectLifeStyle}
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
          />
        );
      case "interests":
        return (
          <InterestsModal
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
            selectedInterests={selectedInterests}
            onSelect={handleSelectInterests}
          />
        );
      case "iLove":
        return (
          <ILoveModal
            isOpen={modal}
            onClose={(prev) => setModal(!prev)}
            handleSelect={handleSelectILoveItems}
            selectedItems={selectedILoveItems}
            setSelectedItems={setSelectedILoveItems}
          />
        );

      default:
        break;
    }
  };
  return (
    <>
      {renderModal()}
      <div className="flex justify-between mb-6">
        <div className="w-[80%] ">
          <p className="text-[20px] font-bold">About Me</p>
          <p className="text-secondary text-sm">
            Tell us something more about you
          </p>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      <div className="grid grid-cols-1 mt-4 space-y-3">
        {about?.map((i) => {
          return (
            <>
              <label className="font-medium text-sm text-[#272829]">
                {i?.title}
              </label>
              {i?.tabs?.map((tab, index) => {
                return (
                  <div
                    className="flex justify-between rounded-full border border-lightSecondary py-3 px-4 text-[#6A6A6A] "
                    onClick={() => {
                      setSelectedTab(tab?.modal);
                      setModal(true);
                    }}
                  >
                    <div className="flex items-center">{tab?.text}</div>
                    <div className="flex items-center gap-x-2">
                      <p>{tab?.selected} selected</p>
                      <p>
                        <FaChevronRight />
                      </p>
                    </div>
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Aboutme;
