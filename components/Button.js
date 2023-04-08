import React from "react";
import styles from "../styles/Button.module.css";

export default function Button({
  children = "button",
  backgroundColorValue,
  borderRadiusType = "5px",
  paddingInline = "20px",
  fontSize,
  width,
}) {
  const backgroundColor =
    backgroundColorValue === "cyan" ? "var(--cyan)" : "transparent";
  const color = backgroundColor === "var(--cyan)" ? "white" : "";
  const borderRadius = borderRadiusType === "rounded" ? "30px" : "5px";
  return (
    <button
      style={{
        backgroundColor,
        color,
        borderRadius,
        paddingInline,
        fontSize,
        width,
      }}
      className={styles.customButton}
    >
      {children}
    </button>
  );
}
