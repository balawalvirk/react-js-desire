import React, { useState } from "react";
import search from '../../assets/svgs/search-normal.svg';
import { FriendListCard } from "../../components/card/Cards";
import { chatList } from "../../DummyData";

const Messages = () => {
    const [selected, setSelected] = useState("Chats");

    const filteredList = chatList?.filter((item) =>
        selected === "Chats" ? item?.type === "chat" : item?.type === "anrufe"
    );

    return (
        <div className="p-3 lg:p-6">
            <div className="flex justify-between items-center mb-12 ml-3 ">
                <p className="font-semibold text-xl">Messages</p>
                <div className="size-12 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
                    <img src={search} size={30} />
                </div>
            </div>
            <div className="flex items-center justify-center w-full border border-lightSecondary rounded-full mb-5">
                <button
                    className={`px-4 h-[40px] lg:h-[48px] w-full rounded-full ${selected === "Chats" ? "bg-[#272829] text-white" : "text-black bg-white"
                        }`}
                    onClick={() => setSelected("Chats")}
                >
                    Chats {selected === "Chats" ? <span className="text-white">(2)</span> : <span className="text-primary">(2)</span>}
                </button>
                <button
                    className={`px-4 h-[40px] lg:h-[48px] w-full rounded-full ${selected === "Anrufe" ? "bg-[#272829] text-white" : "text-black bg-white"
                        }`}
                    onClick={() => setSelected("Anrufe")}
                >
                    Anrufe  {selected === "Anrufe" ? <span className="text-white">(4)</span> : <span className="text-primary">(4)</span>}
                </button>
            </div>
            <div>
                <div className="flex justify-between">
                    <p className="text-normal font-semibold my-4">My All Friends (16)</p>
                    <p className="text-normal font-semibold text-primary my-4">Requests <span className="text-primary">(0)</span></p>
                </div>
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
