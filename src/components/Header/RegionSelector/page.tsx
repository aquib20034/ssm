import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import Flag from "@/assets/images/flags/united-states.webp";

const RegionSelector = () => {
  return (
    <div className={styles.regionSelector}>
      <div className={styles.regionSelector__wrapper}>
        <div className={styles.regionSelector__btn}>
          <figure>
            <Image
              src={Flag}
              alt="Region Flag"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </figure>

          <span className="x_arrow-down-1"></span>
        </div>
      </div>
    </div>
  );
};

export default RegionSelector;
