import React from "react";
import Button from "./Button";
import styles from "../styles/ShortenedLink.module.css";

export default function ShortenedLink({ fullLink, shortenedLink }) {
  return (
    <div className={styles.shortenedLinkContainer}>
      <p>Full link: {fullLink}</p>
      <div>
        <p>Shortened Link: {shortenedLink}</p>
        <Button backgroundColorValue="cyan">Copy</Button>
      </div>
    </div>
  );
}
