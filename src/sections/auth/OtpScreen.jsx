import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import Button from "../../components/buttons/Button";
import OtpInputBoxes from "../../components/inputs/OtpInputBoxes";

const OtpScreen = ({ setTab }) => {
  const [otp, setOtp] = useState("123456");
  return (
    <div>
      <div>
        <div className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
          <RxChevronLeft size={30} onClick={() => setTab("SMSAuth")} />
        </div>
      </div>
      <div className="mt-4 lg:mt-10">
        <div className="mb-8">
          <h2 className=" font-semibold text-[18px] lg:text-[30px]">
            SMS Authentication
          </h2>
          <p className="text-[#6A6A6A] text-sm text-[18px]">
            Verification - Enter the SMS code
          </p>
        </div>
        <div className="max-w-full  lg:max-w-[80%]">
          <div className="space-y-4 mb-5">
            <OtpInputBoxes otp={otp} setOtp={setOtp} />
          </div>

          <Button
            text={"Send Code"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => setTab("personalInfo")}
          />
          <p className="text-xs lg:text-[16px] text-center cursor-pointer">
            Didn’t received a code?
            <span className="text-red-500 mx-2 font-bold">Resend Again</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtpScreen;
