import React, { useState } from "react";

const TouchableOpacity = ({
  children,
  onClick,
  className,
  backgroundColor,
  color,
}) => {
  const [opacity, setOpacity] = useState(1);

  return (
    <div
      onClick={onClick}
      className={className}
      onMouseDown={() => setOpacity(0.4)} // Press effect
      onMouseUp={() => setOpacity(1)} // Release effect
      onMouseLeave={() => setOpacity(1)} // Restore if mouse leaves
      style={{
        opacity,
        transition: "opacity 0.2s ease",
        cursor: "pointer",
        backgroundColor: backgroundColor,
        color: color,
        borderRadius: "8px",
        textAlign: "center",
        userSelect: "none",
      }}
    >
      {children}
    </div>
  );
};

export default TouchableOpacity;
