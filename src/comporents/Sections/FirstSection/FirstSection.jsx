import React from "react";
import styles from "./FirstSection.module.scss";
import firstSectionImg from './../../../../src/images/watch.png'

const FirstSection = () => {
  return (
    <div className={styles.firstSection}>
      <div className={styles.firstContainer}>
        <div className={styles.firstTextBox}>
          <h1>Select Your New Perfect Style</h1>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat is aute irure.
          </p>
          <button>SHOP NOW</button>
        </div>
        <div className={styles.firstSectionImg}>
            <img src={firstSectionImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
