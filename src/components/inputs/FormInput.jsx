const FormInput = ({
  icon,
  placeholder,
  type,
  label,
  inputClassName,
  handleChange,
  value,
  labelClassName,
  className,
}) => {
  return (
    <div className={`${className}  `}>
      {label && <label className={`mx-3  ${labelClassName}`}>{label}</label>}
      <div className="relative">
        <input
          type={type}
          className={`py-3 px-5 block  border-gray-200 rounded-full text-sm relative ${inputClassName}`}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        {icon && (
          <span className="absolute top-4 right-5 text-[#272829]">{icon}</span>
        )}
      </div>
      {/* <p className="text-red-600 text-xs absolute right-5 top-11">KM</p> */}
    </div>
  );
};

export default FormInput;
