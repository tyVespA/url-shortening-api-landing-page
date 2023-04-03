import React from "react";

export default function Button({
  children = "button",
  backgroundColorValue,
  borderRadiusType = "5px",
  paddingInline = "20px",
}) {
  const backgroundColor =
    backgroundColorValue === "cyan" ? "var(--cyan)" : "transparent";
  const color = backgroundColor === "var(--cyan)" ? "white" : "";
  const borderRadius = borderRadiusType === "rounded" ? "30px" : "5px";
  return (
    <button
      style={{ backgroundColor, color, borderRadius, paddingInline }}
      className="customButton"
    >
      {children}
    </button>
  );
}
