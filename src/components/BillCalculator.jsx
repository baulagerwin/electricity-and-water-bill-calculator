import { useState } from "react";
import React from "react";
import Joi from "joi";
import BillForm from "./BillForm";
import BillResult from "./BillResult";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5rem",
};

export default function BillCalculator({ themeColor, icon, heading }) {
  const initialState = [
    {
      input: {
        name: "previousReading",
        for: "Meter Reading",
        value: "",
        isFocused: false,
      },
      placeholder: "Previous Month Meter Reading",
      error: "",
    },
    {
      input: {
        name: "presentReading",
        for: "Meter Reading",
        value: "",
        isFocused: false,
      },
      placeholder: "Present Month Meter Reading",
      error: "",
    },
    {
      input: {
        name: "kWh",
        for: "Kilowatt-hour",
        value: "",
        isFocused: false,
      },
      placeholder: "Charge per kWh",
      error: "",
    },
  ];
  const [fields, setFields] = useState(initialState);
  const [bill, setBill] = useState("");
  const [isCalculating, setIsCalculating] = useState(true);

  function validateInput(target) {
    const schema = Joi.number().required().unsafe();
    const validate = schema.validate(target.value).error;
    const targetFor = fields.find((f) => f.input.name === target.name).input
      .for;
    const prefix = `INVALID: ${targetFor}`;

    return target.value
      ? validate?.details[0].message.replace(`"value"`, prefix)
      : "";
  }

  function handleOnChange(e) {
    const tempFields = fields.map((field) =>
      field.input.name !== e.target.name
        ? field
        : {
            ...field,
            input: {
              ...field.input,
              value: e.target.value,
            },
            error: validateInput(e.target),
          }
    );

    setFields(tempFields);
  }

  function handleOnFocus(e, focus) {
    if (e.target.value) return;

    const tempFields = fields.map((field) =>
      field.input.name !== e.target.name
        ? field
        : {
            ...field,
            input: {
              ...field.input,
              isFocused: focus,
            },
          }
    );

    setFields(tempFields);
  }

  function calculatable() {
    for (let field of fields) {
      if (field.error) return false;
      if (!field.input.value) return false;
    }
    return true;
  }

  function handleSubmit() {
    const values = [];

    fields.forEach((field) => values.push(Number(field.input.value)));

    const bill = ((values[1] - values[0]) * values[2]).toFixed(2);

    setBill(bill);
    setFields(initialState);
    setIsCalculating(!isCalculating);
  }

  return (
    <div style={style}>
      {isCalculating ? (
        <BillForm
          icon={icon}
          heading={heading}
          fields={fields}
          themeColor={themeColor}
          calculatable={calculatable}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onSubmit={handleSubmit}
        />
      ) : (
        <BillResult
          icon={icon}
          heading={heading}
          bill={bill}
          themeColor={themeColor}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
