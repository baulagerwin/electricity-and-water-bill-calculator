import React from "react";

const style = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "1.4rem",
  },
  icon: {
    fontSize: "3.8rem",
  },
  heading: {
    fontSize: "3.8rem",
  },
};

export default function Heading({ icon, heading }) {
  return (
    <div style={style.container}>
      {icon}
      <h1 style={style.heading}>{heading}</h1>
    </div>
  );
}
