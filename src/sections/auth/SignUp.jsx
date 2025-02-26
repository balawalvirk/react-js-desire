import React from "react";
import { toast } from "react-toastify";
import email from "../../assets/svgs/email.svg";
import hide from "../../assets/svgs/Hide.svg";
import Button from "../../components/buttons/Button";
import Checkbox from "../../components/inputs/Checkbox";
import FormInput from "../../components/inputs/FormInput";
import SocialIcon from "../../components/SocialIcon";
import show from "../../assets/images/show.png";
const SignUp = ({
  setTab,
  userData,
  setUserData,
  isPasswordVisible,
  handlePasswordVisibilityToggle,
}) => {
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
              type={"email"}
              icon={<img src={email} />}
              value={userData.email}
              handleChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Enter Password"}
              type={isPasswordVisible ? "text" : "password"}
              icon={
                <img
                  src={isPasswordVisible ? hide : show}
                  onClick={handlePasswordVisibilityToggle}
                  alt="toggle visibility"
                  style={{ cursor: "pointer" }}
                  className="size-6"
                />
              }
              value={userData.password}
              handleChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Re-Enter Password"}
              type={isPasswordVisible ? "text" : "password"}
              icon={
                <img
                  src={isPasswordVisible ? hide : show}
                  onClick={handlePasswordVisibilityToggle}
                  alt="toggle visibility"
                  style={{ cursor: "pointer" }}
                  className="size-6"
                />
              }
              value={userData.confirmPassword}
              handleChange={(e) =>
                setUserData({
                  ...userData,
                  confirmPassword: e.target.value,
                })
              }
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
            handleClick={() => {
              if (userData?.email === "" || userData?.password === "") {
                toast.error("Please Provide All Fields To Proceed !");
                return;
              }
              if (userData?.password !== userData?.confirmPassword) {
                toast.error(
                  "Password & Confirm Password Must not be Different "
                );
                return;
              }

              setTab("personalInfo");
            }}
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
