const Badge = ({ label, value, handleClick }) => {
  return (
    <div
      className="border border-[#E8E6EA] rounded-full px-3 py-2 text-sm mb-3 w-[200px]"
      onClick={handleClick}
    >
      <p className="text-[#6A6A6A]">
        {label} | <span className="text-primary">{value}</span>
      </p>
    </div>
  );
};

export { Badge };
