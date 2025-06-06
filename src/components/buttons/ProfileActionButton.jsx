import Button from "./Button";

const ProfileActionButton = ({ cardTitle, btnTitle, handleClick }) => {
  return (
    <div className="bg-[#FFDDDE] w-full p-4 rounded-2xl" onClick={handleClick}>
      <p className="text-center text-primary text-sm font-normal mb-2">
        {cardTitle}
      </p>
      <div className="flex justify-center">
        <Button
          text={btnTitle}
          btnClassName={
            "rounded-full bg-[#C61323] text-white w-full md:w-[60%] text-center py-3 my-2"
          }
        />
      </div>
    </div>
  );
};

export default ProfileActionButton;
