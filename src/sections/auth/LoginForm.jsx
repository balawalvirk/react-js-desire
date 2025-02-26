import { FaEye } from "react-icons/fa";
import email from "../../assets/svgs/email.svg";
import hide from "../../assets/svgs/Hide.svg";
import show from "../../assets/images/show.png";
import Button from "../../components/buttons/Button";
import Checkbox from "../../components/inputs/Checkbox";
import FormInput from "../../components/inputs/FormInput";
import SocialIcon from "../../components/SocialIcon";
import { useDispatch } from "react-redux";
import { userRemember } from "../../redux/actions";
const LoginForm = ({
  setTab,
  loading,
  handleLogin,
  loginData,
  setLoginData,
  isPasswordVisible,
  handlePasswordVisibilityToggle,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="mt-4 lg:mt-10">
        <div className="mb-8">
          <h2 className="text-[18px] lg:text-[30px] font-semibold mb-3">
            Sign In
          </h2>
          <p className="text-sm lg:text-[#6A6A6A] text-[18px]">
            Enter your email address and password to login.
          </p>
        </div>
        <div className="max-w-full  lg:max-w-[80%]">
          <div className="space-y-2 lg:space-y-4 mb-5">
            <FormInput
              inputClassName={"w-full border border-[#F3F4F9] h-[50px]"}
              placeholder={"dean@dexxire.co |"}
              type={"text"}
              icon={<img src={email} />}
              value={loginData.email}
              handleChange={(e) =>
                setLoginData({
                  ...loginData,
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
              value={loginData.password}
              handleChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between ">
            <Checkbox
              label={"Remember me"}
              handleChange={(e) => dispatch(userRemember(e.target.checked))}
            />
            <p
              className="text-red-500 text-xs lg:text-[14px] cursor-pointer"
              onClick={() => {
                setTab("Forget");
              }}
            >
              Forget Password ?
            </p>
          </div>

          <Button
            text={loading ? "...Wait " : "Login"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => {
              handleLogin();
            }}
          />

          <div className="flex justify-center items-center mb-4 gap-x-6 text-[#9EA1AE]">
            <div className="h-[1px] bg-[#9EA1AE] w-auto lg:w-[180px]"></div>
            <span className="text-[#9EA1AE] text-sm">or continue with</span>
            <div className="h-[1px] bg-[#9EA1AE]  w-auto lg:w-[180px]"></div>
          </div>
          <SocialIcon />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
