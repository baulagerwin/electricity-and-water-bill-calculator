import React from "react";
import { useState } from "react";

const style = {
  fontSize: "2rem",
  padding: "2rem",
  width: "20rem",
  cursor: "pointer",
  fontFamily: "inherit",
  border: "2px solid #444",
  borderRadius: "0.5rem",
  outline: "none",
  backgroundColor: "#fff",
  transition: "all 0.2s",
};

export default function SubmitButton({
  action,
  themeColor,
  type,
  isDisabled = false,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type={type}
      disabled={isDisabled}
      style={
        isHovered
          ? {
              ...style,
              ...{
                border: `2px solid ${themeColor}`,
                backgroundColor: `${themeColor}`,
                color: "#fff",
              },
            }
          : style
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {action}
    </button>
  );
}
