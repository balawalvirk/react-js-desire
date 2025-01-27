import React, { useState } from "react";
import { FriendListCard } from "../../components/card/Cards";
import { chatList } from "../../DummyData";

const Messages = () => {
    const [selected, setSelected] = useState("Chats");

    const filteredList = chatList?.filter((item) =>
        selected === "Chats" ? item?.type === "chat" : item?.type === "anrufe"
    );

    return (
        <div className="p-3 lg:p-8">
            <div className="flex justify-between items-center mb-12">
                <p className="font-semibold text-xl">Messages</p>
            </div>
            <div className="flex items-center justify-center w-full border border-lightSecondary rounded-full mb-5">
                <button
                    className={`px-4 h-[48px] w-full rounded-full ${selected === "Chats" ? "bg-[#272829] text-white" : "text-black bg-white"
                        }`}
                    onClick={() => setSelected("Chats")}
                >
                    Chats (2)
                </button>
                <button
                    className={`px-4 h-[48px] w-full rounded-full ${selected === "Anrufe" ? "bg-[#272829] text-white" : "text-black bg-white"
                        }`}
                    onClick={() => setSelected("Anrufe")}
                >
                    Anrufe (3)
                </button>
            </div>
            <div>
                {filteredList?.map((item, index) => (
                    <FriendListCard
                        key={index}
                        name={item?.name}
                        lastMessage={item?.lastMessage}
                        callTime={item?.callTime}
                        img={item?.image}
                        type={item?.type}
                    />
                ))}
            </div>
        </div>
    );
};

export default Messages;
