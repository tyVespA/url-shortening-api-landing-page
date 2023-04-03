import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    <>
      <nav className={styles.header}>
        <Image src="/images/logo.svg" width={121} height={33} />
        <div className={styles.navAndBtns}>
          <ul>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
          <div className={styles.buttons}>
            <Button>Login</Button>
            <Button
              backgroundColorValue="cyan"
              borderRadiusType="rounded"
              paddingInline="30px"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
