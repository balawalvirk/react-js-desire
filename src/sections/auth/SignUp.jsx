import React from "react";
import FormInput from "../../components/inputs/FormInput";
import { MdEmail } from "react-icons/md";
import Checkbox from "../../components/inputs/Checkbox";
import Button from "../../components/buttons/Button";
import SocialIcon from "../../components/SocialIcon";
import email from "../../assets/svgs/email.svg";
import hide from "../../assets/svgs/Hide.svg";
const SignUp = ({ setTab }) => {
  return (
    <div>
      <div className="mt-4 lg:mt-10">
        <div className="mb-8">
          <h2 className="text-[18px] lg:text-[30px] font-semibold mb-3">
            Sign Up
          </h2>
          <p className="text-[#6A6A6A] text-sm lg:text-[18px]">
            Enter your detail below to sign up.
          </p>
        </div>
        <div className="max-w-full lg:max-w-[80%]">
          <div className="space-y-4 mb-5">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"dean@dexxire.co |"}
              type={"text"}
              icon={<img src={email} />}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Enter Password"}
              type={"text"}
              icon={<img src={hide} />}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Re-Enter Password"}
              type={"text"}
              icon={<img src={hide} />}
            />
          </div>
          <div className="flex justify-end ">
            <p
              className="text-red-500 text-xs lg:text-[14px] cursor-pointer"
              onClick={() => {
                setTab("Login");
              }}
            >
              Already have an Account ?
            </p>
          </div>

          <Button
            text={"Create Account"}
            handleClick={() => setTab("SMSAuth")}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-3 lg:my-8 "
            }
          />

          <div className="flex justify-center items-center mb-4 gap-x-6">
            <div className="h-[1px] bg-[#9EA1AE] w-auto lg:w-[180px]"></div>
            <span className="text-[#9EA1AE] text-sm">or continue with</span>
            <div className="h-[1px] bg-[#9EA1AE] w-auto lg:w-[180px]"></div>
          </div>
          <SocialIcon />

          <div className="flex flex-col items-center gap-x-2 space-y-3 mt-8 mb-6">
            <Checkbox
              labelClassName="text-xs lg:text-sm"
              label={`You consent to receive up to 10 automated messages / month. Reply "STOP" to opt out, "HELP" for support. Standard rates apply.`}
            />
            <div className="h-[1px] bg-[#9EA1AE] w-auto lg:w-[300px]"></div>
            <Checkbox
              labelClassName="text-xs lg:text-sm"
              label={`By signing up, you agree to our Privacy Policy, Terms & Conditions, and marketing terms, which you can revoke anytime.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
