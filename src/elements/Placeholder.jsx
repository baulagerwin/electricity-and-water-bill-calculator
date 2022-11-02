import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "0",
  transform: "translate(1.5rem, -50%)",
  backgroundColor: "#fff",
  padding: "1rem",
  pointerEvents: "none",
  transition: "0.2s",

  whenTextFieldIsFocused: {
    position: "absolute",
    top: "0",
    left: "0",
    transform: "translate(1.5rem, -50%)",
    padding: "1rem",
    pointerEvents: "none",
    transition: "0.2s",
    borderRadius: "0.5rem",
    fontSize: "1.6rem",
    color: "#fff",
  },
};

export default function Placeholder({ placeholder, isFocused, themeColor }) {
  let whenTextFieldIsFocused = {
    ...style.whenTextFieldIsFocused,
    backgroundColor: `${themeColor}`,
  };

  return (
    <span style={isFocused ? whenTextFieldIsFocused : style}>
      {placeholder}
    </span>
  );
}
