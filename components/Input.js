import React from "react";
import styles from "../styles/Input.module.css";
import Button from "./Button";
import Layout from "./Layout";

export default function Input() {
  return (
    <Layout>
      <div className={styles.inputContainer}>
        <form action="">
          <input type="text" placeholder="Shorten a link here..." />
          <Button backgroundColorValue="cyan">Shorten it!</Button>
        </form>
      </div>
    </Layout>
  );
}
