import React from "react";
import Button from "./Button";
import styles from "../styles/ShortenedLink.module.css";
import { useRef } from "react";

export default function ShortenedLink({ fullLink, shortenedLink = "test" }) {
  const linkRef = useRef(null);

  function copyToClipBoard() {
    const link = linkRef.current;

    link.select();
    link.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(link.value);
    console.log("copied");
  }
  return (
    <div className={styles.shortenedLinkContainer}>
      <p>Full link: {fullLink}</p>
      <div>
        <p>
          Shortened Link:{" "}
          <input
            className={styles.shortenedLink}
            type="text"
            value={shortenedLink}
            ref={linkRef}
            size={shortenedLink.length}
            readOnly
            disabled
          />
        </p>
        <div className={styles.buttonContainer} onClick={copyToClipBoard}>
          <Button backgroundColorValue="cyan">Copy</Button>
        </div>
      </div>
    </div>
  );
}
