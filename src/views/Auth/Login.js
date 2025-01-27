import React, { useState } from "react";
import AuthWrapper from "../../components/globals/AuthWrapper";
import Toggle from "../../components/Toggle";
import LoginForm from "../../sections/auth/LoginForm";
import SignUp from "../../sections/auth/SignUp";
import ForgetPassword from "../../sections/auth/ForgetPassword";
import SmsAuth from "../../sections/auth/SmsAuth";
import OtpScreen from "../../sections/auth/OtpScreen";
import PersonalInformation from "../../sections/auth/PersonalInformation";
import UploadImages from "../../sections/auth/UploadImages";
import { useDispatch } from "react-redux";
const Login = () => {
    const dispatch = useDispatch()
    const [tab, setTab] = useState("Login");

    const renderItem = () => {
        switch (tab) {
            case "Login":
                return <LoginForm setTab={setTab} dispatch={dispatch} />;
            case "SignUp":
                return <SignUp setTab={setTab} />;
            case "Forget":
                return <ForgetPassword setTab={setTab} />;
            case "SMSAuth":
                return <SmsAuth setTab={setTab} />;
            case "otp":
                return <OtpScreen setTab={setTab} />;
            case "personalInfo":
                return <PersonalInformation setTab={setTab} />;
            case "uploadImages":
                return <UploadImages setTab={setTab} />;
            default:
                break;
        }
    };
    return (
        <AuthWrapper>
            <div className="ml-6 mr-6 lg:mr-0 lg:ml-16 mt-12">
                {(tab === "Login" || tab === "SignUp") && (
                    <Toggle tab={tab} setTab={setTab} />
                )}
                {renderItem()}
            </div>
        </AuthWrapper>
    );
};

export default Login;
