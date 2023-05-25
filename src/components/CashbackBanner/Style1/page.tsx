import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";

type Props = {
  title: string;
  description: string;
  amount: string;
  ctaTitle: string;
  ctaLink: string;
};

const CashbackBannerS1: FunctionComponent<Props> = ({
  title = "",
  description = "",
  amount = "",
  ctaTitle = "",
  ctaLink = "",
}) => {
  return (
    <div className={styles.cashbackBannerS1}>
      <div className={styles.cashbackBannerS1__wrapper}>
        <div className={styles.cashbackBannerS1__left}>
          <span className={styles.cashbackBannerS1__amount}>
            <span>{amount}</span>
          </span>

          <span className={styles.cashbackBannerS1__bellIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20.678"
              height="22.749"
              viewBox="0 0 20.678 22.749"
            >
              <g
                id="Icon_feather-bell"
                data-name="Icon feather-bell"
                transform="translate(1 1)"
              >
                <path
                  id="Path_6049"
                  data-name="Path 6049"
                  d="M20.065,9.226a6.226,6.226,0,0,0-12.452,0c0,7.264-3.113,9.339-3.113,9.339H23.178s-3.113-2.075-3.113-9.339"
                  transform="translate(-4.5 -3)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_6050"
                  data-name="Path 6050"
                  d="M19,31.5a2.075,2.075,0,0,1-3.59,0"
                  transform="translate(-7.861 -11.785)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </span>
        </div>

        <div className={styles.cashbackBannerS1__right}>
          <div className={styles.cashbackBannerS1__content}>
            <h2 className={styles.cashbackBannerS1__heading}>{title}</h2>

            <p className={styles.cashbackBannerS1__description}>
              {description}
            </p>

            <div>
              <a
                href={ctaLink}
                target="_blank"
                className={styles.cashbackBannerS1__link}
              >
                {ctaTitle}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cashbackBannerS1__backgroundImg}></div>
    </div>
  );
};

export default CashbackBannerS1;
