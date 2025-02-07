import React, { useState } from "react";
import { LuVideo } from "react-icons/lu";
import { RxSpeakerLoud } from "react-icons/rx";
import microphone from "../../../assets/images/Microphone Off.png";
import videoIcon from "../../../assets/images/Video 2.png";
import phoneCall from "../../../assets/images/phone-call.png";

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
    <div className="absolute bottom-4 md:bottom-10 left-0 right-0 bg-[#3737374D] text-white backdrop-filter backdrop-blur-sm py-3 md:py-8 px-4 rounded-2xl">
      <div className="flex justify-between items-center">
        {/* Mute/Unmute Button */}
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isMuted ? "bg-[#FFFFFF33]" : "bg-[#FFFFFF33]"
          }`}
          onClick={handleMute}
        >
          <img src={microphone} size={20} />
        </button>

        {/* Video On/Off Button */}
        <button
          className={`flex items-center justify-center w-12 h-12 rounded-full ${
            isVideoOn ? "bg-[#FFFFFF33]" : "bg-[#FFFFFF33]"
          }`}
          onClick={handleVideo}
        >
          {isVideoOn ? (
            <img src={videoIcon} size={20} />
          ) : (
            <LuVideo size={20} />
          )}
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
          <img src={phoneCall} />
        </button>
      </div>
    </div>
  );
};

export default CallControls;
