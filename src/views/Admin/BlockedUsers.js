import React from "react";
import { FriendListCard } from "../../components/card/Cards";
import { friendsList } from "../../DummyData";
import FriendsScreenHeader from "../../components/FriendsScreenHeader";

const BlockedUsers = () => {
  return (
    <div className="py-3 px-6">
      <FriendsScreenHeader title={"Blocked Users (03)"} />
      <div>
        {friendsList?.map((i) => (
          <FriendListCard
            name={i?.name}
            location={i?.location}
            distance={i?.distance}
            img={i?.image}
            screen={"blockUsers"}
          />
        ))}
      </div>
    </div>
  );
};

export default BlockedUsers;
