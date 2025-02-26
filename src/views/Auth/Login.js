import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthWrapper from "../../components/globals/AuthWrapper";
import Toggle from "../../components/Toggle";
import { getUserById, ResetUserPassword, saveData, signIn, signUp } from "../../firebase/Config";
import { setUser } from "../../redux/actions";
import ForgetPassword from "../../sections/auth/ForgetPassword";
import LoginForm from "../../sections/auth/LoginForm";
import OtpScreen from "../../sections/auth/OtpScreen";
import PersonalInformation from "../../sections/auth/PersonalInformation";
import SignUp from "../../sections/auth/SignUp";
import SmsAuth from "../../sections/auth/SmsAuth";
import UploadImages from "../../sections/auth/UploadImages";
const Login = () => {
    //HOOKS =================================
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //LOCAL STATES ===========================
    const [tab, setTab] = useState("Login");
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        selectedGender: "",
        genderToSearch: "",
        username: "",
        dob: "",
        placeOfResidence: "",
        invisibility: false,
    });
    const [forgetData, setForgetData] = useState({
        email: "",
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);


    //FUNCTIONS ==============================


    const handlePasswordVisibilityToggle = () => {
        setIsPasswordVisible((prev) => !prev);
    };
    const handleSignup = async () => {
        const {
            email,
            password,
            confirmPassword,
            placeOfResidence,
            dob,
            username,
            privateImages,
            publicImages,
            invisibility,
            selectedGender,
            genderToSearch,
        } = userData;
        if (password !== confirmPassword) {
            toast.error("Password is not the same ! Try Again");
            return;
        }
        setLoading(true);
        const response = await signUp(email, password);
        if (response?.user?.uid) {
            let privatePictures = [];
            let publicPictures = [];
            // if (publicImages?.length > 0) {
            //     publicPictures = await uploadingImages(
            //         publicImages ?? [],
            //         "public_images"
            //     );
            // }
            // if (privateImages?.length > 0) {
            //     privatePictures = await uploadingImages(
            //         privateImages ?? [],
            //         "public_images"
            //     );
            // }
            let obj = {
                email: email,
                _id: response.user.uid,
                publicPictures: [],
                privateImages: [],
                placeOfResidence,
                dob,
                username,
                selectedGender,
                genderToSearch,
                invisibility: invisibility ?? false,
            };
            saveData("Users", obj?._id, obj).then((res) => {
                if (res) {
                    toast.success("Your account has been created Successfully !");
                    dispatch(setUser(obj));
                    setTab("personalInfo");
                    setLoading(false);
                    navigate("/");
                } else {
                    toast.error("Your account has not been created Successfully !");
                    setLoading(false);
                }
            });
        }
    };
    const handleLogin = async () => {
        const { email, password } = loginData;

        if (!password || !email) {
            toast.error("Email & Password is Required");
            return;
        }
        setLoading(true);
        const response = await signIn(email, password);
        if (response && response.user) {
            const result = await getUserById(response.user, "Users");

            if (result?.success) {
                dispatch(setUser(result?.user));
                setLoading(false);
                navigate("/");
            } else {
                return;
            }
        } else {
            toast.error("User not found ! Please Try Again ");
            setLoading(false);
        }
    };
    const handleForget = () => {
        if (!forgetData?.email) {
            toast.error("Please Provide an Email !")
        }
        setLoading(true)
        try {
            ResetUserPassword(forgetData?.email).then((response) => {
                if (response?.success) {
                    toast.success("Please check your email to update the Password !")
                    setLoading(false)
                    setTab('Login')
                    setForgetData({ email: '' })
                }
            })
        } catch (error) {
            toast.error(error?.message)
        }
    };
    const renderItem = () => {
        switch (tab) {
            case "Login":
                return (
                    <LoginForm
                        setTab={setTab}
                        loading={loading}
                        handleLogin={handleLogin}
                        loginData={loginData}
                        setLoginData={setLoginData}
                        isPasswordVisible={isPasswordVisible}
                        setIsPasswordVisible={setIsPasswordVisible}
                        handlePasswordVisibilityToggle={handlePasswordVisibilityToggle}
                    />
                );
            case "SignUp":
                return (
                    <SignUp
                        setTab={setTab}
                        userData={userData}
                        setUserData={setUserData}
                        isPasswordVisible={isPasswordVisible}
                        setIsPasswordVisible={setIsPasswordVisible}
                        handlePasswordVisibilityToggle={handlePasswordVisibilityToggle}
                    />
                );
            case "Forget":
                return (
                    <ForgetPassword
                        setTab={setTab}
                        loading={loading}
                        forgetData={forgetData}
                        setForgetData={setForgetData}
                        handleForget={handleForget}
                    />
                );
            case "SMSAuth":
                return <SmsAuth setTab={setTab} />;
            case "otp":
                return <OtpScreen setTab={setTab} />;
            case "personalInfo":
                return (
                    <PersonalInformation
                        setTab={setTab}
                        userData={userData}
                        setUserData={setUserData}
                    />
                );
            case "uploadImages":
                return (
                    <UploadImages
                        setTab={setTab}
                        userData={userData}
                        setUserData={setUserData}
                        loading={loading}
                        handleSignup={handleSignup}
                    />
                );
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
