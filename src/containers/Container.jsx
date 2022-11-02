import React from "react";

const style = {
  maxWidth: "130rem",
  padding: "0 3.2rem",
  margin: "0 auto",
};

export default function Container({ children }) {
  return <div style={style}>{children}</div>;
}
