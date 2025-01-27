import React from "react";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import Button from "../../components/buttons/Button";
import imgUpload from "../../assets/images/img-upload.png";
const UploadImages = ({ setTab }) => {
  return (
    <div>
      <div>
        <div className="size-16 border border-[#E8E6EA] rounded-full flex items-center justify-center cursor-pointer">
          <RxChevronLeft size={30} onClick={() => setTab("personalInfo")} />
        </div>
      </div>
      <div className="mt-10">
        <div className=" max-w-[80%]">
          <div className="mb-8">
            <h2 className="text-[30px] font-semibold">
              Uploade pictures from you
            </h2>
            <p className="text-[#6A6A6A] text-[18px]">
              No nude pictures may be uploaded here. Please upload pictures of
              this kind only to private galleries. All pictures that violate our
              guidelines will be deleted immediately.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-5">
            <div>
              <h2 className="text-[16px] font-semibold mb-3">
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
              <h2 className="text-[16px] font-semibold mb-3">
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
            <div></div>
          </div>
          <Button
            text={"Next"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => setTab("otp")}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
