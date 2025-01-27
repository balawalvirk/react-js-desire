import React from "react";

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
            isSender ? "flex justify-end" : "flex justify-start"
          }`}
        >
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
