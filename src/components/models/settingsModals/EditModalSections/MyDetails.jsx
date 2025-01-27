import FormInput from "../../../inputs/FormInput";
const MyDetails = () => {
  return (
    <>
      <div className="w-[80%] ">
        <p className="text-[20px] font-bold">My Details</p>
        <p className="text-secondary text-sm">2 Factor Authentication</p>
      </div>
      <div className="grid grid-cols-1 mt-4 space-y-3">
        <div className="flex justify-between rounded-full border border-lightSecondary py-4 px-4">
          <div className="flex items-center gap-x-5">
            <p className="text-primary">LBS</p>
            <span className="text-[#6A6A6A]">|</span>
            <p className="text-[#6A6A6A]">KG</p>
          </div>
          <div className="flex items-center justify-between text-[#6A6A6A]">
            -------
          </div>
          <div className="flex items-center gap-x-5">
            <p className="text-primary">CM</p>
            <span className="text-[#6A6A6A]">|</span>
            <p className="text-[#6A6A6A]">Inch</p>
          </div>
        </div>
        <FormInput
          placeholder={"Ethan Blake"}
          label={"User Name"}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"Ethan Blake"}
          label={"Language"}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"25"}
          label={"Age"}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"United States of America"}
          label={"Nationality"}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"Ethan Blake"}
          label={"Ethnicity "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
      </div>
      <div className="grid grid-cols-2  mt-3 gap-x-2 gap-y-4">
        <FormInput
          placeholder={"189"}
          label={"Height "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"89"}
          label={"Width "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"110"}
          label={"Chest "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"90"}
          label={"Waist "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"110"}
          label={"Hips "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"Blue"}
          label={"Eye Color "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <FormInput
          placeholder={"Blond"}
          label={"Hair Color "}
          labelClassName={"font-medium"}
          inputClassName={"border border-1 w-full"}
        />
        <FormInput
          placeholder={"Shoulder Length"}
          label={"Hair Length "}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
      </div>
    </>
  );
};

export default MyDetails;
