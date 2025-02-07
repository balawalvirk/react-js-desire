import imgUpload from "../../../../assets/images/img-upload.png";
import image from "../../../../assets/images/image.jpeg";
import ImageUploader from "../../../ImageUploader";
import { useState } from "react";

const MyPictures = () => {
  const [croppedImagesPublic, setCroppedImagesPublic] = useState([]);
  const [imageSrcPublic, setImageSrcPublic] = useState(null);
  const [showCropperPublic, setShowCropperPublic] = useState(false);

  const [croppedImagesPrivate, setCroppedImagesPrivate] = useState([]);
  const [imageSrcPrivate, setImageSrcPrivate] = useState(null);
  const [showCropperPrivate, setShowCropperPrivate] = useState(false);

  const handleFileChangePublic = (event) => {
    const file = event.target.files[0];
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
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrcPrivate(reader.result);
        setShowCropperPrivate(true);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-2">
      {/* Public Pictures Section */}
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
        <h2 className="text-[16px] font-semibold mb-2">Public Pictures</h2>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {/* Public images container */}
          {croppedImagesPublic.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Cropped ${index}`}
              className="w-32 h-40 object-cover rounded-lg border"
            />
          ))}

          {/* Public upload button */}
          <label className="bg-[#FFDDDE] h-40 w-32 rounded-lg flex justify-center items-center cursor-pointer">
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

      {/* Private Pictures Section */}
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
        <h2 className="text-[16px] font-semibold mb-2">Private Pictures</h2>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {/* Private images container */}
          {croppedImagesPrivate.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Cropped ${index}`}
              className="w-32 h-40 object-cover rounded-lg border"
            />
          ))}

          {/* Private upload button */}
          <label className="bg-[#FFDDDE] h-40 w-32 rounded-lg flex justify-center items-center cursor-pointer">
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
  );
};

export default MyPictures;
