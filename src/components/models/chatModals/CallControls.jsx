import React, { useState } from "react";
import { IoVolumeMuteOutline } from "react-icons/io5";
import { LuVideo } from "react-icons/lu";
import { MdCallEnd } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";

const CallControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isSpeakerphoneOn, setIsSpeakerphoneOn] = useState(true);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideo = () => {
    setIsVideoOn(!isVideoOn);
  };

  const handleSpeakerphone = () => {
    setIsSpeakerphoneOn(!isSpeakerphoneOn);
  };

  const handleEndCall = () => {
    console.log("Call ended");
  };

  return (
    <div className="absolute bottom-10 left-0 right-0 bg-[#3737374D] text-white backdrop-filter backdrop-blur-sm py-8 px-4 rounded-2xl">
      <div className="flex justify-between items-center">
        {/* Mute/Unmute Button */}
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isMuted ? "bg-[#FFFFFF33]" : "bg-[#FFFFFF33]"
          }`}
          onClick={handleMute}
        >
          {isMuted ? (
            <IoVolumeMuteOutline size={20} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 9v6M12 15l6-6"
              />
            </svg>
          )}
        </button>

        {/* Video On/Off Button */}
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isVideoOn ? "bg-[#FFFFFF33]" : "bg-[#FFFFFF33]"
          }`}
          onClick={handleVideo}
        >
          {isVideoOn ? <LuVideo size={20} /> : <LuVideo size={20} />}
        </button>

        {/* Speakerphone Button */}
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isSpeakerphoneOn ? "bg-[#FFFFFF33]" : "bg-[#FFFFFF33]"
          }`}
          onClick={handleSpeakerphone}
        >
          {isSpeakerphoneOn ? (
            <RxSpeakerLoud size={20} />
          ) : (
            <RxSpeakerLoud size={20} />
          )}
        </button>

        {/* End Call Button */}
        <button
          className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600"
          onClick={handleEndCall}
        >
          <MdCallEnd />
        </button>
      </div>
    </div>
  );
};

export default CallControls;
