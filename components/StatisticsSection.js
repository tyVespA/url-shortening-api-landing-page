import React from "react";
import Layout from "./Layout";
import styles from "../styles/StatisticsSection.module.css";
import StatisticsCard from "./StatisticsCard";

export default function StatisticsSection() {
  return (
    <Layout>
      <div className={styles.statisticsSection}>
        <h2>Advanced Statistics</h2>
        <p className={styles.statisticsDescription}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={styles.statisticsCards}>
          <StatisticsCard
            iconName="icon-brand-recognition"
            title="Brand Recognition"
          >
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </StatisticsCard>
          <StatisticsCard
            iconName="icon-detailed-records"
            title="Detailed Records"
          >
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </StatisticsCard>
          <StatisticsCard
            iconName="icon-fully-customizable"
            title="Fully Customizable"
          >
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </StatisticsCard>
        </div>
      </div>
    </Layout>
  );
}
