import React, { useState } from "react";
import { RxChevronLeft } from "react-icons/rx";
import "react-international-phone/style.css";
import { useDispatch } from "react-redux";
import imgUpload from "../../assets/images/img-upload.png";
import Button from "../../components/buttons/Button";
import ImageUploader from "../../components/ImageUploader";
const UploadImages = ({
  setTab,
  userData,
  setUserData,
  loading,
  handleSignup,
}) => {
  const dispatch = useDispatch();
  const [isEnabled, setIsEnabled] = useState(false);
  const [croppedImagesPublic, setCroppedImagesPublic] = useState([]);

  const [imageSrcPublic, setImageSrcPublic] = useState(null);
  const [showCropperPublic, setShowCropperPublic] = useState(false);

  const [croppedImagesPrivate, setCroppedImagesPrivate] = useState([]);
  const [imageSrcPrivate, setImageSrcPrivate] = useState(null);
  const [showCropperPrivate, setShowCropperPrivate] = useState(false);
  const [privateImages, setPrivateImages] = useState([]);
  const [publicImages, setPublicImages] = useState([]);

  const handleFileChangePublic = (event) => {
    const file = event.target.files[0];
    setPublicImages((prev) => [...publicImages, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrcPublic(reader.result);
        setShowCropperPublic(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChangePrivate = (event) => {
    const file = event.target.files[0];
    setPrivateImages((prev) => [...privateImages, file]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrcPrivate(reader.result);
        setShowCropperPrivate(true);
      };
      reader.readAsDataURL(file);
    }
  };
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
          <div className="grid grid-cols-1 gap-x-5">
            {/* Public Pictures Section */}
            <div>
              <ImageUploader
                croppedImages={croppedImagesPublic}
                setCroppedImages={setCroppedImagesPublic}
                imageSrc={imageSrcPublic}
                setImageSrc={setImageSrcPublic}
                showCropper={showCropperPublic}
                setShowCropper={setShowCropperPublic}
                title={"Public Pictures"}
              />
              <div className="mb-0">
                <h2 className="text-[16px] font-semibold mb-2">
                  Public Pictures
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  {/* Public images container */}
                  {croppedImagesPublic.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Cropped ${index}`}
                      className="h-52 w-44 object-cover rounded-lg border"
                    />
                  ))}

                  {/* Public upload button */}
                  <label className="bg-[#FFDDDE] h-52 w-44 rounded-lg flex justify-center items-center cursor-pointer">
                    <img src={imgUpload} alt="Upload" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChangePublic}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Public Pictures Section */}
            <div>
              <ImageUploader
                croppedImages={croppedImagesPrivate}
                setCroppedImages={setCroppedImagesPrivate}
                imageSrc={imageSrcPrivate}
                setImageSrc={setImageSrcPrivate}
                showCropper={showCropperPrivate}
                setShowCropper={setShowCropperPrivate}
                title={"Private Pictures"}
              />
              <div className="mb-3">
                <h2 className="text-[16px] font-semibold mb-2">
                  Private Pictures
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-2">
                  {croppedImagesPrivate.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Cropped ${index}`}
                      className="h-52 w-44 object-cover rounded-lg border"
                    />
                  ))}

                  <label className="bg-[#FFDDDE] h-52 w-44 rounded-lg flex justify-center items-center cursor-pointer">
                    <img src={imgUpload} alt="Upload" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChangePrivate}
                      className="hidden"
                    />
                  </label>
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
            text={loading ? "...Wait Creating your account " : "Next"}
            btnClassName={
              "rounded-full bg-[#C61323] text-white w-full text-center py-3 my-8"
            }
            handleClick={() => {
              setUserData({
                ...userData,
                privateImages: privateImages,
                publicImages: publicImages,
                invisibility: isEnabled,
              });

              handleSignup();
              // dispatch(userLogin(true));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadImages;
