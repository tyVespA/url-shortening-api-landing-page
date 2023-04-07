import React from "react";
import Layout from "./Layout";
import styles from "../styles/StatisticsSection.module.css";

export default function StatisticsSection() {
  return (
    <Layout>
      <div className={styles.statisticsSection}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.statisticsCards}></div>
      </div>
    </Layout>
  );
}
