import React from "react";
import { FriendListCard } from "../../components/card/Cards";
import { friendsList } from "../../DummyData";
import FriendsScreenHeader from "../../components/FriendsScreenHeader";

const RequestsSent = () => {
  return (
    <div className="py-1 px-3 md:px-6">
      <FriendsScreenHeader title={"Requests Sent (03)"} />
      <div>
        {friendsList?.map((i) => (
          <FriendListCard
            name={i?.name}
            location={i?.location}
            distance={i?.distance}
            img={i?.image}
            screen={'requestSent'}
          />
        ))}
      </div>
    </div>
  );
};

export default RequestsSent;
