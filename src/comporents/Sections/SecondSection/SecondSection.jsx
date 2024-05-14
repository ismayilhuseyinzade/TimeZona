import React from "react";
import styles from "./SecondSection.module.scss";
import thermoBallEtipGloves from "./../../../images/new_product1.png";

const SecondSection = () => {
  return (
    <div className={styles.secondSection}>
      <div className={styles.secondContainer}>
        <h1>New Arrivals</h1>
        <div className={styles.secondtImagesBox}>

          <div className={styles.secondtImgBox}>

            <div>
              <img src={thermoBallEtipGloves} alt="" />
            </div>

            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>

          </div>

          <div>

            <div>
              <img src={thermoBallEtipGloves} alt="" />
            </div>

            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>

          </div>

          <div>
            <div>
              <img src={thermoBallEtipGloves} alt="" />
            </div>
            <h3>Thermo Ball Etip Gloves</h3>
            <p>$ 45,743</p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default SecondSection;
