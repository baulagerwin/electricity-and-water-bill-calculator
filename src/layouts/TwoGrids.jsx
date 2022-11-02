import React, { useState } from "react";
import { useEffect } from "react";

const style = {
  display: "grid",
  columnGap: "6.4rem",
  rowGap: "9.6rem",
  gridTemplateColumns: "repeat(2, 1fr)",

  mobile: {
    display: "grid",
    columnGap: "6.4rem",
    rowGap: "9.6rem",
    gridTemplateColumns: "1fr",
  },
};

export default function TwoGrids({ children }) {
  const [w, setW] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div style={w < 700 ? style.mobile : style}>{children}</div>;
}
