import imgUpload from "../../../../assets/images/img-upload.png";
import image from "../../../../assets/images/image.jpeg";
const MyPictures = () => {
  return (
    <div className="my-2">
      <div className="mb-6">
        <h2 className="text-[16px] font-semibold mb-2">Public Pictures</h2>
        <div className="flex items-center gap-x-2">
          <img src={image} alt="" className="h-40 w-32 rounded-lg" />
          <div className="bg-[#FFDDDE] h-40 w-32 rounded-lg flex justify-center items-center">
            <img src={imgUpload} alt="" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-[16px] font-semibold mb-2">Private Pictures</h2>
        <div className="flex items-center gap-x-2">
          {/* <img src={image} alt="" className="h-52 w-50 rounded-lg" /> */}
          <div className="bg-[#FFDDDE] h-40 w-32 rounded-lg flex justify-center items-center">
            <img src={imgUpload} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPictures;
