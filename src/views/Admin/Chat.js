import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { RxChevronLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import image from '../../assets/images/friend.png';
import attachment from '../../assets/svgs/Attachment.svg';
import happy from '../../assets/svgs/Happy  1.svg';
import send from '../../assets/svgs/Send 3.svg';
import video from '../../assets/svgs/Video 2.svg';
import phone from '../../assets/svgs/call.svg';
import menu from "../../assets/svgs/menu.svg";
import ChatBubble from "../../components/ChatBubble";
import DropdownMenu from "../../components/inputs/DropdownMenu";
import AudioCallModal from "../../components/models/chatModals/AudioCallModal";
import VideoCallModal from "../../components/models/chatModals/VideoCallModal";
const MENU_ITEMS = [
    { id: 1, label: "Delete", action: () => console.log("Send Like clicked") },
    {
        id: 2,
        label: "Search",
        action: () => console.log("Share Profile clicked"),
    },
    { id: 3, label: "Mute", action: () => console.log("Mute clicked") },
    { id: 4, label: "Media & Links", action: () => console.log("Unfriend clicked") },
    { id: 4, label: "Clear Chat", action: () => console.log("Unfriend clicked") },
    { id: 4, label: "Add Shortcut", action: () => console.log("Unfriend clicked") },
    { id: 4, label: "Export Chat", action: () => console.log("Unfriend clicked") },
    { id: 4, label: "Report", action: () => console.log("Unfriend clicked") },
    { id: 4, label: "Block", action: () => console.log("Unfriend clicked") },
];

const Chat = () => {
    const navigate = useNavigate()
    const [messages, setMessages] = useState([
        {
            message: 'Hi Sabir, how are you? I saw on the app that we’ve crossed paths several times this week. 😊',
            isSender: false,
            time: '2:55 PM',
        },
        {
            message: 'Haha truly! Nice to meet you Miracle! What about a cup of coffee today evening? ☕️',
            isSender: true,
            time: '3:02 PM',
        },
        {
            message: 'Sure, let’s do it! 😊',
            isSender: false,
            time: '3:10 PM',
        },
        {
            message: 'Great! I will write later the exact time and place. See you soon!',
            isSender: true,
            time: '2:12 PM',
        },
    ]);
    const [audioCall, setAudioCall] = useState(false)
    const [videoCall, setVideoCall] = useState(false)
    const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newMessage.trim() === '') return;

        setMessages([
            ...messages,
            { message: newMessage, isSender: true, time: 'Just Now' },
        ]);
        setNewMessage('');
    };

    return (
        <>
            <div className="py-6 px-6">
                <AudioCallModal isOpen={audioCall} onClose={(prev) => {
                    setAudioCall(!prev)
                }} />
                <VideoCallModal isOpen={videoCall} onClose={(prev) => {
                    setVideoCall(!prev)
                }} />
                <div className="flex justify-between mb-4">
                    <div className="flex items-center gap-x-3">
                        <div onClick={() => {
                            navigate(-1)
                        }} className="size-10 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
                            <RxChevronLeft size={30} />
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3">
                        <img src={video} className="text-[#272829]" onClick={() => {
                            setVideoCall(true)
                        }} />
                        <img src={phone} className="text-[#272829]" onClick={() => {
                            setAudioCall(true)
                        }} />
                        <DropdownMenu
                            menuItems={MENU_ITEMS}
                            icon={<img src={menu} alt="menu" />}
                            buttonClassName="bg-white"
                            dropdownClassName="w-36 rounded-lg shadow-xl"
                            itemClassName="text-[#272829]"
                            onOpen={() => console.log("Dropdown opened")}
                            onClose={() => console.log("Dropdown closed")}
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3 my-6">
                        <span className={`size-16 rounded-full`}>
                            <img src={image} alt="" />
                        </span>
                        <div className="flex  flex-col">
                            <span className="text-[14px] font-semibold">Miracle Addi</span>
                            <span className="text-[12px]">Typing...</span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-4 text-[#9EA1AE] gap-x-8">
                        <div className="h-[1px] bg-[#9EA1AE] w-full"></div>
                        <span className="text-[#9EA1AE] text-sm">Today</span>
                        <div className="h-[1px] bg-[#9EA1AE] w-full"></div>
                    </div>

                </div>
                <div>
                    <div className="p-4">
                        <div className="flex flex-col space-y-2 mb-20">
                            {messages.map((message, index) => (
                                <ChatBubble
                                    key={index}
                                    message={message.message}
                                    isSender={message.isSender}
                                    time={message.time}
                                />
                            ))}
                        </div>


                        <form onSubmit={handleSubmit} className=" p-2 flex items-center relative ">
                            <input
                                type="text"
                                placeholder="Your message"
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                                className="flex-grow px-4 py-4  border border-gray-200 mr-2 relative  rounded-full"
                            />
                            <div className="absolute right-16">
                                <div className="flex gap-x-3"><img src={happy} />
                                    <img src={attachment} size={20} className="text-gray-500 mr-2" />
                                    <button type="button" className="bg-black border border-lightSecondary rounded-full p-4">
                                        <img src={send} size={20} className="text-primary" />
                                    </button>
                                </div>
                            </div>
                            <button type="submit" className="bg-white border border-lightSecondary rounded-full p-4">
                                <FaMicrophone size={20} className="text-primary" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
