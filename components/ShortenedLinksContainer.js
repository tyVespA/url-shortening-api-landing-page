import React from "react";
import styles from "../styles/ShortenedLinksContainer.module.css";
import ShortenedLink from "./ShortenedLink";

export default function ShortenedLinksContainer() {
  return (
    <div className={styles.shortenedLinksContainer}>
      <ShortenedLink></ShortenedLink>
      <ShortenedLink></ShortenedLink>
    </div>
  );
}
