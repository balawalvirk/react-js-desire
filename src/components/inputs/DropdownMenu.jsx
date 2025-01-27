import { useState, useRef, useEffect } from "react";

const DropdownMenu = ({
  menuItems = [],
  icon,
  buttonClassName = "",
  dropdownClassName = "",
  itemClassName = "",
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const nextState = !prev;
      nextState ? onOpen() : onClose();
      return nextState;
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      onClose();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`p-2 rounded-full bg-white focus:outline-none  focus:ring-white ${buttonClassName}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Menu options"
      >
        {icon}
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 ${dropdownClassName}`}
        >
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                  onClose();
                }}
                className={`block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${itemClassName}`}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
