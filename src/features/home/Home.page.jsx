import React from "react";
import Directory from "../../menu/directory/Directory";
import styles from "./home.module.scss";

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default HomePage;
