import { RxChevronLeft } from "react-icons/rx";
import { ProfileFriendsListCard } from "../../../components/card/Cards";
import { friendsList } from "../../../DummyData";

const Requests = ({ setSelectedView }) => {
  return (
    <div className="py-1 md:px-6 ">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-x-3">
          <div
            className="size-10 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => {
              setSelectedView("profileInformation");
            }}
          >
            <RxChevronLeft size={30} />
          </div>
          <p className="text-normal font-semibold ">Requests</p>
        </div>

        <div className="flex items-center ">
          <input
            type="radio"
            className="size-5 mt-0.5 border-gray-200 rounded-full  "
          />
          <label className="text-md font-semibold ms-2 0">Select</label>
        </div>
      </div>
      <div className="mt-6">
        {friendsList?.map((i) => (
          <ProfileFriendsListCard
            name={i?.name}
            location={i?.location}
            distance={i?.distance}
            img={i?.image}
            screen={"requests"}
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
