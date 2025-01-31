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
            <p className="text-primary">lbs</p>
            <span className="text-[#6A6A6A]">|</span>
            <p className="text-[#6A6A6A]">Kg</p>
          </div>
          <div className="w-[40px] flex justify-center items-center">
            <div
              className={`ms-2 w-full h-[2px] flex-1  bg-gray-200
                `}
            ></div>
          </div>
          <div className="flex items-center gap-x-5">
            <p className="text-primary">cm</p>
            <span className="text-[#6A6A6A]">|</span>
            <p className="text-[#6A6A6A]">inch</p>
          </div>
        </div>
        <FormInput
          placeholder={"Ethan Blake"}
          label={"User Name"}
          labelClassName={"font-medium text-[14px] "}
          inputClassName={"border border-1 w-full mt-2"}
        />
        <label htmlFor="" className="font-medium text-[14px] mx-2">
          Language
        </label>
        <select
          name=""
          id=""
          className="border  mb-3 mt-3 py-3 px-5 block  border-gray-200 rounded-full text-sm text-gray-400"
        >
          <option value="">Language</option>
          <option value="">German</option>
          <option value="">French</option>
          <option value="">Spanish</option>
        </select>

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

        <label htmlFor="" className="font-medium text-[14px] mx-2">
          Ethnicity
        </label>
        <select
          name=""
          id=""
          className="border  mb-3 mt-3 py-3 px-5 block  border-gray-200 rounded-full text-sm text-gray-400"
        >
          <option value="">option1</option>
          <option value="">option2</option>
          <option value="">option3</option>
        </select>
      </div>

      <div className="grid grid-cols-2  mt-3 gap-x-2 gap-y-4">
        <div className="relative">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Height
          </label>
          <input
            placeholder="189"
            className={`py-3 px-5 block  border-gray-200 rounded-full text-sm  border border-1 w-full mt-2 relative`}
          />
          <p className="text-red-600 text-xs absolute  right-5 top-[46px] font-bold">
            cm
          </p>
        </div>

        <div className="relative">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Weight
          </label>
          <input
            placeholder="189"
            className={`py-3 px-5 block  border-gray-200 rounded-full text-sm  border border-1 w-full mt-2 relative`}
          />
          <p className="text-red-600 text-xs absolute  right-5 top-[46px] font-bold">
            kg
          </p>
        </div>
        <div className="relative">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Chest
          </label>
          <input
            placeholder="110"
            className={`py-3 px-5 block  border-gray-200 rounded-full text-sm  border border-1 w-full mt-2 relative`}
          />
          <p className="text-red-600 text-xs absolute  right-5 top-[46px] font-bold">
            cm
          </p>
        </div>
        <div className="relative">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Waist
          </label>
          <input
            placeholder="90"
            className={`py-3 px-5 block  border-gray-200 rounded-full text-sm  border border-1 w-full mt-2 relative`}
          />
          <p className="text-red-600 text-xs absolute  right-5 top-[46px] font-bold">
            cm
          </p>
        </div>
        <div className="relative">
          <label htmlFor="" className="font-medium text-[14px] mx-2">
            Hips
          </label>
          <input
            placeholder="90"
            className={`py-3 px-5 block  border-gray-200 rounded-full text-sm  border border-1 w-full mt-2 relative`}
          />
          <p className="text-red-600 text-xs absolute  right-5 top-[46px] font-bold">
            cm
          </p>
        </div>

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
