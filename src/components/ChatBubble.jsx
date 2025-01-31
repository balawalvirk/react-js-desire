import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const ChatBubble = ({ message, isSender, time }) => {
  return (
    <div
      className={`flex ${
        isSender ? "justify-end" : "justify-start"
      } items-center mb-2`}
    >
      {isSender && (
        <div className="mr-2">
          {/* Optional: Display sender's avatar here */}
        </div>
      )}
      <div className="flex flex-col">
        <div
          className={`px-4 py-2 rounded-lg ${
            isSender ? "bg-[#272829] text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          <p className="text-sm">{message}</p>
        </div>
        <div
          className={`mt-3 ${
            isSender ? "flex gap-x-3 justify-end" : "flex gap-x-3 justify-start"
          }`}
        >
          <span className="text-xs text-gray-500">{time}</span>
          {isSender && <IoCheckmarkDoneOutline className="text-primary" />}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
