import { Fragment, useState } from "react";
import React from "react";
import TextBox from "./TextBox";
import SubmitButton from "../elements/SubmitButton";

const style = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "3rem",
};

export default function Form({
  fields,
  themeColor,
  action,
  isDisabled,
  onChange,
  onFocus,
  onSubmit,
}) {
  return (
    <form
      style={style}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {fields.map((field) => (
        <Fragment key={field.input.name}>
          <TextBox
            input={field.input}
            isValid={field.error}
            placeholder={field.error || field.placeholder}
            themeColor={field.error ? "red" : themeColor}
            onChange={onChange}
            onFocus={onFocus}
          />
        </Fragment>
      ))}
      <SubmitButton
        action={action}
        themeColor={themeColor}
        type="submit"
        isDisabled={isDisabled}
      />
    </form>
  );
}
