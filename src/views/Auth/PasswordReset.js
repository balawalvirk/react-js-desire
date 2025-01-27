import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "../../components/buttons/Button";
import FormInput from "../../components/inputs/FormInput";

const PasswordReset = () => {
    const navigate = useNavigate();
    return (
        <div className=" px-5 lg:px-16 py-8 gradientText ">
            <div className="flex items-center gap-2 mb-10 md:mb-0 ">
                <img src={logo} />
                <p className="text-[20px] font-bold">ConstructAI</p>
            </div>
            <div className="flex justify-center border border-[#D4AF37] w-[100%] md:w-[400px] mx-auto p-4 md:p-10 mb-10">
                <div className="flex flex-col">
                    <div className="mb-5">
                        <p className="text-2xl font-bold">Password Reset</p>
                        <p>We Will Help You Reset your Password</p>
                    </div>
                    <div className="space-y-2">
                        <FormInput
                            placeholder={"Enter Email Address"}
                            label={"Email"}
                            inputClassName={"w-[100%] md:w-[350px]  mb-5"}
                        />

                        <Button
                            text={"Reset Password"}
                            btnClassName={"text-black justify-center w-full"}
                            handleClick={() => {
                                navigate('/auth/confirmation');
                            }}
                        />
                    </div>
                    <div className="h-[0.5px] bg-[#D4AF37] my-5"></div>
                    <div className="text-center ">
                        <p className="mb-5">Remembered your Password?</p>
                        <Link to={"/auth/acccount"} className="font-em">
                            Back to Sign In
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-[30px] md:text-[50px] font-semibold mx-auto max-w-5xl text-center leading-[35px] md:leading-[64px]">
                Build Smart, Manage Efficiently, Transform Construction.
            </div>
        </div>
    );
};

export default PasswordReset;
