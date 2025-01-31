import React from "react";
import { profiles } from "../../../DummyData";
import { UserProfileCard } from "../../../components/card/Cards";
import rotate from "../../../assets/svgs/rotate.svg";
const StandardProfiles = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-semibold mb-5 ">Standard Profiles</h1>
        <div className="flex items-center gap-x-2">
          <img src={rotate} alt="" />
          <p className="text-primary cursor-pointer">Load More</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-3 ">
        {profiles
          ?.filter((i) => i?.type === "vip")
          .map((i, index) => (
            <UserProfileCard
              key={index}
              location={i?.location}
              badge={i?.badge}
              name={i?.name}
              distance={i?.distance}
              img={i?.img}
              age={i?.age}
              type="standard"
            />
          ))}
      </div>
    </div>
  );
};

export default StandardProfiles;
