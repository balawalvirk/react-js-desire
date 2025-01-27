import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import Button from "../../components/buttons/Button";
const SmsAuth = ({ setTab }) => {
  const [phone, setPhone] = useState("");
  return (
    <div>
      <div>
        <div className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
          <RxChevronLeft size={30} onClick={() => setTab("SignUp")} />
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-8">
          <h2 className="text-[18px] lg:text-[30px] font-semibold">
            SMS Authentication
          </h2>
          <p className="text-[#6A6A6A] text-sm lg:text-[18px]">Verification</p>
        </div>
        <div className="max-w-full max-w-[80%]">
          <div className="space-y-4 mb-5">
            <PhoneInput
              defaultCountry="ua"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              className="w-full"
            />
          </div>

          <Button
            text={"Send Code"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => setTab("otp")}
          />
        </div>
      </div>
    </div>
  );
};

export default SmsAuth;
