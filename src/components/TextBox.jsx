import React from "react";
import Placeholder from "../elements/Placeholder";
import TextField from "../elements/TextField";

const style = {
  textBox: {
    position: "relative",
    fontSize: "2rem",
    width: "100%",

    withAnimation: {
      position: "relative",
      fontSize: "2rem",
      width: "100%",
      animation: "shake 400ms ease-in-out",
    },
  },
};

export default function TextBox({
  input,
  isValid,
  placeholder,
  themeColor,
  onChange,
  onFocus,
}) {
  return (
    <div style={isValid ? style.textBox.withAnimation : style.textBox}>
      <TextField
        name={input.name}
        value={input.value}
        isFocused={input.isFocused}
        themeColor={themeColor}
        onChange={onChange}
        onFocus={onFocus}
      />
      <Placeholder
        placeholder={placeholder}
        isFocused={input.isFocused}
        themeColor={themeColor}
      />
    </div>
  );
}
