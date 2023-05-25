"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  tabList: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

const TabS1: FunctionComponent<Props> = ({
  tabList,
  activeIndex = 0,
  setActiveIndex,
}) => {
  const [localActiveIndex, setLocalActiveIndex] = useState(0);

  useEffect(() => {
    setLocalActiveIndex(localActiveIndex);
  }, [activeIndex]);

  return (
    <div className={styles.tabS1}>
      <div className={styles.tabS1__wrapper}>
        {tabList && tabList.length
          ? tabList.map((tabName, index) => {
              return (
                <div key={index}>
                  <button
                    type="button"
                    className={`${styles.tabS1__btn} ${
                      localActiveIndex
                        ? localActiveIndex === index
                          ? styles["tabS1__btn--active"]
                          : ""
                        : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {tabName}
                  </button>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default TabS1;
