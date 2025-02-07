import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import imgUpload from "../../src/assets/images/img-upload.png"; // Ensure correct path

const ImageUploader = ({
  croppedImages,
  setCroppedImages,
  showCropper,
  setShowCropper,
  setImageSrc,
  imageSrc,
  title,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleDone = () => {
    if (croppedAreaPixels && imageSrc) {
      const image = new Image();
      image.src = imageSrc;
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        const croppedImage = canvas.toDataURL("image/jpeg");
        setCroppedImages((prev) => [...prev, croppedImage]);
        setImageSrc(null);
        setShowCropper(false);
      };
    }
  };

  return (
    <div className="text-center p-2">
      {showCropper && imageSrc && (
        <div className="relative w-[300px] h-[533px] mx-auto border-2 border-gray-300">
          <Cropper
            image={imageSrc}
            crop={crop}
            zoom={zoom}
            aspect={9 / 16}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
          <button
            onClick={handleDone}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
