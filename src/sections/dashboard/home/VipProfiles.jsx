import React from "react";
import { profiles } from "../../../DummyData";
import rotate from "../../../assets/svgs/rotate.svg";
import { UserProfileCard } from "../../../components/card/Cards";
const VipProfiles = () => {
  return (
    <div>
      <div className="flex justify-end items-center my-5 gap-x-3 mx-10">
        <img src={rotate} alt="" />
        <p className="text-primary cursor-pointer">Load More</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
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
            />
          ))}
      </div>
    </div>
  );
};

export default VipProfiles;
