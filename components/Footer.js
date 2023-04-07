import React from "react";
import Image from "next/image";
import Layout from "./Layout";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Layout>
      <div className={styles.footerContainer}>
        <Image src="/images/logoFooter.svg" width={121} height={33}></Image>
      </div>
    </Layout>
  );
}
