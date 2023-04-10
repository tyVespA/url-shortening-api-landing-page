import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import Button from "./Button";

export default function Navbar() {
  const [slidedIn, setSlidedIn] = useState(false);

  function slideIn() {
    setSlidedIn(!slidedIn);
  }

  useEffect(() => {
    if (slidedIn) {
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.overflow = `auto`;
    }
  }, [slidedIn]);

  return (
    <>
      <nav className={styles.header}>
        <Image src="/images/logo.svg" width={121} height={33} />
        <div
          className={`${styles.navAndBtns} ${slidedIn ? styles.slidedIn : ""}`}
        >
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
        <button className={styles.hamburgerButton} onClick={() => slideIn()}>
          <Image
            src="/images/menu-icon.svg"
            width={40}
            height={40}
            alt="Menu button"
          />
        </button>
      </nav>
    </>
  );
}
