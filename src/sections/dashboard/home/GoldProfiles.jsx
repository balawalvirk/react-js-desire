import React from "react";
import { profiles } from "../../../DummyData";
import { UserProfileCard } from "../../../components/card/Cards";
import rotate from "../../../assets/svgs/rotate.svg";
import ProfileHeader from "./ProfileHeader";
const GoldProfiles = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-between">
        <ProfileHeader title={"GOLD Profiles"} />
        <div className="flex items-center gap-x-2">
          <img src={rotate} alt="" />
          <p className="text-primary cursor-pointer">Load More</p>
        </div>
      </div> */}
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-x-3 ">
        {profiles.map((i, index) => (
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

export default GoldProfiles;
