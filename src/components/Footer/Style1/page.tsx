"use client";

import React, { FunctionComponent, useState } from "react";
import styles from "./index.module.scss";
import Link from "next/link";

type Props = {
  data: {
    groupName: string;
    storeList: {
      name: string;
      path: string;
    }[];
  }[];
  regions: { name: string; path: string }[];
};

const FooterS1: FunctionComponent<Props> = ({ data, regions }) => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(-1);

  const toggleActiveGroupIndex = (index: number) => {
    if (index === activeGroupIndex) {
      setActiveGroupIndex(-1);
    } else {
      setActiveGroupIndex(index);
    }
  };

  return (
    <footer className={styles.footerS1}>
      <div className={styles.footerS1__wrapper}>
        <div className="container">
          <ul className={styles.footerS1__list}>
            {data.map((linksGroup, index) => {
              return (
                <li key={index} className={styles.footerS1__list__item}>
                  <div
                    className={`${styles.footerS1__list__head} ${
                      activeGroupIndex === index
                        ? styles["footerS1__list__head--active"]
                        : ""
                    }`}
                    onClick={() => toggleActiveGroupIndex(index)}
                  >
                    <div className={styles.footerS1__list__title}>
                      <span>{linksGroup.groupName}</span>
                    </div>

                    <span className={styles.footerS1__list__icon}>
                      <span className="x_arrow-down-1"></span>
                    </span>
                  </div>

                  <ul
                    className={`${styles.footerS1__linkList} ${
                      activeGroupIndex === index
                        ? styles["footerS1__linkList--expanded"]
                        : ""
                    }`}
                  >
                    {linksGroup.storeList.map(({ name, path }, index) => {
                      return (
                        <li
                          key={index}
                          className={styles.footerS1__linkList__item}
                        >
                          <Link
                            href={path}
                            aria-label={name}
                            className={styles.footerS1__linkList__anchor}
                          >
                            {name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>

          <div className={styles.footerS1__regions}>
            <ul className={styles.regionList}>
              {regions.map((region, index) => {
                return (
                  <li key={index} className={styles.regionList__item}>
                    <Link
                      href={region.path}
                      aria-label={region.name}
                      className={styles.regionList__link}
                    >
                      {region.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterS1;
