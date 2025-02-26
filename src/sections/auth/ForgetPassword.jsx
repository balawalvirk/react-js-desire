import React from "react";
import { MdEmail } from "react-icons/md";
import { RxChevronLeft } from "react-icons/rx";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/inputs/FormInput";
import emailSvg from "../../assets/svgs/email.svg";
const ForgetPassword = ({
  setTab,
  forgetData,
  setForgetData,
  handleForget,
  loading,
}) => {
  return (
    <div>
      <div>
        <div
          className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => {
            setTab("Login");
          }}
        >
          <RxChevronLeft size={30} />
        </div>
      </div>
      <div className="mt-10">
        <div className="mb-8">
          <h2 className="text-[30px] font-semibold">Forget Your Password</h2>
          <p className="text-[#6A6A6A] text-[18px]">
            Enter your email address to reset your password!
          </p>
        </div>
        <div className=" max-w-[80%]">
          <div className="space-y-4 mb-5">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"dean@dexxire.co |"}
              type={"email"}
              icon={<img src={emailSvg} />}
              value={forgetData?.email}
              handleChange={(e) => {
                setForgetData({
                  ...forgetData,
                  email: e.target.value,
                });
              }}
            />
          </div>

          <Button
            text={loading ? "...Wait" : "Reset Password"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-4"
            }
            handleClick={handleForget}
          />
          <div className="flex justify-center ">
            <p
              className="text-[#6A6A6A] text-[16px] cursor-pointer"
              onClick={() => {
                setTab("SignUp");
              }}
            >
              You remember?{" "}
              <span className="font-bold text-primary">Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
