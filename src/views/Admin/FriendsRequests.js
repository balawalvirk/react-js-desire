import React from "react";
import { friendsList } from "../../DummyData";
import { FriendListCard } from "../../components/card/Cards";
import FriendsScreenHeader from "../../components/FriendsScreenHeader";

const FriendsRequests = () => {
  return (
    <div className="py-1 px-2 md:px-6">
      <FriendsScreenHeader title={"Friend Requests (03)"} />
      <div>
        {friendsList?.map((i) => (
          <FriendListCard
            name={i?.name}
            location={i?.location}
            distance={i?.distance}
            img={i?.image}
            screen={'friendRequests'}
          />
        ))}
      </div>
    </div>
  );
};

export default FriendsRequests;
