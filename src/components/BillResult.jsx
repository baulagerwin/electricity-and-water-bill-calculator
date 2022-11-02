import React from "react";
import Heading from "./Heading";
import SubmitButton from "../elements/SubmitButton";

export default function BillResult({
  icon,
  heading,
  bill,
  themeColor,
  onSubmit,
}) {
  return (
    <>
      <Heading icon={icon} heading={heading.replace(" Calculator", "")} />
      <span style={{ fontSize: "5rem", width: "100%" }}>{`₱ ${bill}`}</span>
      <SubmitButton
        action={"Calculate Again"}
        themeColor={themeColor}
        type="button"
        onClick={onSubmit}
      />
    </>
  );
}
