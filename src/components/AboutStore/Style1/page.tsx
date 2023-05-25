"use client";

import React, { FunctionComponent, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  data: { title: string; description: string }[];
};

const AboutStoreS1: FunctionComponent<Props> = ({ data }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const toggleTab = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.aboutStoreS1}>
      <div className={styles.aboutStoreS1__wrapper}>
        <div className={styles.aboutStoreS1__left}>
          <ul className={styles.tabList}>
            {data && data.length
              ? data.map(({ title }, index) => {
                  return (
                    <li key={index} className={styles.tabList__item}>
                      <button
                        type="button"
                        className={`${styles.tabList__btn} ${
                          activeTabIndex === index
                            ? styles["tabList__btn--active"]
                            : ""
                        }`}
                        onClick={() => toggleTab(index)}
                      >
                        {title}
                      </button>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>

        <div className={styles.aboutStoreS1__right}>
          {data && data.length
            ? data.map(({ title, description }, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.tabItem} ${
                      activeTabIndex === index ? styles["tabItem--active"] : ""
                    }`}
                  >
                    <div className={styles.tabItem__wrapper}>
                      <div
                        className={styles.tabItem__top}
                        onClick={() => toggleTab(index)}
                      >
                        <h3 className={styles.tabItem__title}>{title}</h3>
                        <span className={styles.tabItem__icon}>
                          <span className="x_arrow-down-1"></span>
                        </span>
                      </div>

                      <div className={styles.tabItem__bottom}>
                        <p>{description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default AboutStoreS1;
