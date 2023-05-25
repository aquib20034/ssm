import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";

const DropdownList = () => {
  return (
    <ul className={styles.dropdownList}>
      <li className={styles.dropdownList__item}>
        <Link href="/" className={styles.dropdownList__link}>
          NavLink
        </Link>
      </li>
      <li className={styles.dropdownList__item}>
        <Link href="/" className={styles.dropdownList__link}>
          NavLink
        </Link>
      </li>
      <li className={styles.dropdownList__item}>
        <Link
          href="/"
          className={`${styles.dropdownList__link} ${styles["dropdownList__link--bold"]}`}
        >
          NavLink
        </Link>
      </li>
    </ul>
  );
};

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <nav className={styles.navigation__wrapper}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <div className={styles.navigation__link}>
              <span className={styles.navigation__link__title}>Top Stores</span>
              <span className={styles.navigation__link__icon}>
                <span className="x_arrow-down-1"></span>
              </span>

              <div className={styles.navigation__dropdown}>
                <DropdownList />
              </div>
            </div>
          </li>

          <li className={styles.navigation__item}>
            <div className={styles.navigation__link}>
              <span className={styles.navigation__link__title}>Categories</span>
              <span className={styles.navigation__link__icon}>
                <span className="x_arrow-down-1"></span>
              </span>

              <div className={styles.navigation__dropdown}>
                <DropdownList />
              </div>
            </div>
          </li>

          <li className={styles.navigation__item}>
            <Link href="/" className={styles.navigation__link}>
              <span className={styles.navigation__link__title}>About Us</span>
            </Link>
          </li>

          <li className={styles.navigation__item}>
            <Link href="/" className={styles.navigation__link}>
              <span className={styles.navigation__link__title}>Contact Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
