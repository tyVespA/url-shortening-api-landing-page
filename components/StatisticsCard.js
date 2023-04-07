import React from "react";
import styles from "../styles/StatisticsCard.module.css";
import Image from "next/image";

export default function StatisticsCard({ iconName, title, children }) {
  return (
    <div className={styles.statisticsCard}>
      <div className={styles.iconContainer}>
        <Image src={`/images/${iconName}.svg`} width={40} height={40} />
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
