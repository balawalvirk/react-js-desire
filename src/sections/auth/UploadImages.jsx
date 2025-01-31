import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import Button from "../../components/buttons/Button";
import imgUpload from "../../assets/images/img-upload.png";
import { userLogin } from "../../redux/actions";
import { useDispatch } from "react-redux";
const UploadImages = ({ setTab }) => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
  };
  return (
    <div>
      <div>
        <div className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
          <RxChevronLeft size={30} onClick={() => setTab("personalInfo")} />
        </div>
      </div>
      <div className="mt-10">
        <div className="max-w-full  lg:max-w-[80%]">
          <div className="mb-8">
            <h2 className="text-[18px] lg:text-[30px] font-semibold mb-4">
              Uploade pictures from you
            </h2>
            <p className="text-[#6A6A6A] text-sm lg:text-[18px]">
              No nude pictures may be uploaded here. Please upload pictures of
              this kind only to private galleries. All pictures that violate our
              guidelines will be deleted immediately.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <h2 className="text-[14px] lg:text-[16px] font-semibold mb-3">
                Public Pictures
              </h2>
              <div className="flex items-center gap-x-2">
                {/* <img src={image} alt="" className="h-52 w-50 rounded-lg" /> */}
                <div className="bg-[#FFDDDE] h-52 w-44 rounded-lg flex justify-center items-center">
                  <img src={imgUpload} alt="" />
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-[14px] lg:text-[16px] font-semibold mb-3">
                Private Pictures
              </h2>
              <div className="flex items-center gap-x-2">
                {/* <img src={image} alt="" className="h-52 w-50 rounded-lg" /> */}
                <div className="bg-[#FFDDDE] h-52 w-44 rounded-lg flex justify-center items-center">
                  <img src={imgUpload} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between my-8">
            <p className="text-[14px] text-[#6A6A6A] w-80">
              Do you want to remain invisible to others? The Ghose mode is
              perfect for you
            </p>
            <div>
              <div className="relative inline-block w-[48px] h-6 select-none">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="absolute w-0 h-0 opacity-0"
                  checked={isEnabled}
                  onChange={handleToggle}
                  role="switch"
                  aria-checked={isEnabled}
                />
                <label
                  htmlFor="toggle"
                  className={`
            block overflow-hidden h-7 rounded-full cursor-pointer transition-colors duration-300 ease-in-out
            ${isEnabled ? "bg-blue-600" : "bg-gray-200"}
          `}
                >
                  <span
                    className={`
              block h-7 w-7 rounded-full transform transition-transform duration-300 ease-in-out bg-white shadow-md
              ${isEnabled ? "translate-x-[26px]" : "translate-x-0"}
            `}
                  />
                </label>
              </div>
            </div>
          </div>
          <Button
            text={"Next"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => {
              dispatch(userLogin(true));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
