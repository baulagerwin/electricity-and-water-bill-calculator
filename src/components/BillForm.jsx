import React from "react";
import Heading from "./Heading";
import Form from "./Form";

export default function BillForm({
  icon,
  heading,
  fields,
  themeColor,
  calculatable,
  onChange,
  onFocus,
  onSubmit,
}) {
  return (
    <>
      <Heading icon={icon} heading={heading} />
      <Form
        action={"Calculate"}
        fields={fields}
        themeColor={themeColor}
        isDisabled={!calculatable()}
        onChange={onChange}
        onFocus={onFocus}
        onSubmit={onSubmit}
      />
    </>
  );
}
