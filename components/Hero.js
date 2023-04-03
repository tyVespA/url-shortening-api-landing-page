import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button
          backgroundColorValue="cyan"
          borderRadiusType="rounded"
          fontSize="1.2rem"
          paddingInline="30px"
        >
          Get started
        </Button>
      </div>
      <div className={styles.heroImage}></div>
    </div>
  );
}
