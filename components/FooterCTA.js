import React from "react";
import styles from "../styles/FooterCTA.module.css";
import Button from "./Button";

export default function FooterCTA() {
  return (
    <div className={styles.footerCTA}>
      <h2>Boost your links today</h2>
      <Button backgroundColorValue="cyan" borderRadiusType="rounded">
        Get Started
      </Button>
    </div>
  );
}
