import React from "react";
import FormInput from "../../components/inputs/FormInput";
import { MdEmail } from "react-icons/md";
import Checkbox from "../../components/inputs/Checkbox";
import Button from "../../components/buttons/Button";
import SocialIcon from "../../components/SocialIcon";
import { userLogin } from "../../redux/actions";

const LoginForm = ({ setTab, dispatch }) => {
  return (
    <div>
      <div className="mt-10">
        <div className="mb-8">
          <h2 className="text-[30px] font-semibold">Sign In</h2>
          <p className="text-[#6A6A6A] text-[18px]">
            Enter your email address and password to login.
          </p>
        </div>
        <div className=" max-w-[80%]">
          <div className="space-y-4 mb-5">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"dean@dexxire.co |"}
              type={"text"}
              icon={<MdEmail />}
            />
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"Enter Password"}
              type={"text"}
            />
          </div>
          <div className="flex justify-between ">
            <Checkbox label={"Remember me"} />
            <p
              className="text-red-500 text-[14px]"
              onClick={() => {
                setTab("Forget");
              }}
            >
              Forget Password ?
            </p>
          </div>

          <Button
            text={"Login"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => {
              dispatch(userLogin(true));
            }}
          />

          <div className="flex justify-center items-center mb-4">
            <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
            <span className="text-[#9EA1AE] text-sm">or continue with</span>
            <div className="h-[1px] bg-[#9EA1AE] w-[200px]"></div>
          </div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
