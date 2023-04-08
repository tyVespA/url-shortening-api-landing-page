import React from "react";
import Image from "next/image";
import Layout from "./Layout";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <Layout>
      <div className={styles.footerContainer}>
        <Image
          src="/images/logoFooter.svg"
          width={121}
          height={33}
          alt="Company's logo"
        />
        <div className={styles.footerLinks}>
          <div className={styles.footerNavColumn}>
            <h4>Features</h4>
            <a href="#">Link Shortening</a>
            <a href="#">Branded Links</a>
            <a href="#">Analytics</a>
          </div>
          <div className={styles.footerNavColumn}>
            <h4>Resources</h4>
            <a href="#">Blog</a>
            <a href="#">Developers</a>
            <a href="#">Support</a>
          </div>
          <div className={styles.footerNavColumn}>
            <h4>Company</h4>
            <a href="#">About</a>
            <a href="#">Our Team</a>
            <a href="#">Careers</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={styles.socialIcons}>
          <a href="#">
            <Image
              src="/images/icon-facebook.svg"
              width={24}
              height={24}
              alt="Facebook icon"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-twitter.svg"
              width={24}
              height={20}
              alt="Twitter icon"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-pinterest.svg"
              width={24}
              height={24}
              alt="Pinterest icon"
            />
          </a>
          <a href="#">
            <Image
              src="/images/icon-instagram.svg"
              width={24}
              height={24}
              alt="Instagram icon"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
