import React from "react";
import OtpInput from "react-otp-input";

export default function OtpInputBoxes({ otp, setOtp }) {
  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          border: "1px solid #F3F4F9",
          borderRadius: "50%",
          height: "60px",
          width: "60px",
          margin: "0px 16px",
          color: "red",
        }}
      />
    </div>
  );
}
