const Button = ({ text, btnClassName, handleClick }) => {
  return (
    <button className={`${btnClassName} `} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
