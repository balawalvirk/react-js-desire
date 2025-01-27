import { useCallback, useEffect, useState } from "react";

const StandardModal = ({ isOpen, onClose, children, size = "xl" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(isOpen);
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  if (!isVisible) return null;

  const sizeClass =
    {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
    }[size] || "max-w-md";

  return (
    <div
      className="modal fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-modal-gradient  bg-opacity-50 p-2 backdrop-blur-[5px]"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`relative w-full ${sizeClass} max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-lg`}
      >
        {children}
      </div>
    </div>
  );
};

export default StandardModal;
