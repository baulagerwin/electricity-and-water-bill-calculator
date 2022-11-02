import React from "react";

const style = {
  width: "100%",
  fontFamily: "inherit",
  fontSize: "inherit",
  padding: "2rem",
  border: "2px solid #444",
  borderRadius: "0.5rem",
  outline: "none",
  // overflowWrap: "break-word",
  focus: {
    width: "100%",
    fontFamily: "inherit",
    fontSize: "inherit",
    padding: "2rem",
    borderRadius: "0.5rem",
    outline: "none",
  },
};

export default function Input({
  name,
  value,
  isFocused,
  themeColor,
  onChange,
  onFocus,
}) {
  let whenFocused = { ...style.focus, border: `2px solid ${themeColor}` };

  return (
    <input
      type="text"
      style={isFocused ? whenFocused : style}
      name={name}
      value={value}
      onChange={(e) => onChange(e)}
      onFocus={(e) => onFocus(e, true)}
      onBlur={(e) => onFocus(e, false)}
      autoComplete="off"
    />
  );
}
