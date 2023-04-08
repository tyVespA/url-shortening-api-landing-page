import React from "react";
import Button from "./Button";
import styles from "../styles/ShortenedLink.module.css";
import { useRef } from "react";
import { useState } from "react";

export default function ShortenedLink({ fullLink, shortenedLink = "test" }) {
  const linkRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy");

  function changeButtonText() {
    setButtonText("Copied");
  }

  function copyToClipBoard() {
    const link = linkRef.current;

    link.select();
    link.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(link.value);
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
        <div
          className={styles.buttonContainer}
          onClick={() => {
            copyToClipBoard();
            changeButtonText();
          }}
        >
          <Button backgroundColorValue="cyan" width="100px">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
