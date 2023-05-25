"use client";

import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import ButtonS2 from "@/components/Button/Style2/page";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";

type Props = {
  tagName: string;
  variant: "primary" | "secondary" | "disabled" | "green" | undefined;
  logoUrl: string;
  logoAlt: string;
  title: string;
  couponCount: string | number;
  ctaTitle: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  ctaHandler: () => void;
};

const StoreCardS1: FunctionComponent<Props> = ({
  tagName,
  variant,
  logoUrl,
  logoAlt,
  title,
  couponCount,
  ctaTitle,
  headingLevel,
  ctaHandler,
}) => {
  return (
    <div className={styles.storeCardS1}>
      <div className={styles.storeCardS1__wrapper}>
        <div className={styles.storeCardS1__top}>
          <div
            className={`${styles.storeCardS1__tag} ${
              styles[`storeCardS1__tag--${variant}`]
            }`}
          >
            {tagName}
          </div>
        </div>

        <div className={styles.storeCardS1__mid}>
          <div className={styles.storeCardS1__logo}>
            <figure>
              <img src={logoUrl} alt={logoAlt} />
            </figure>
          </div>

          <div className={styles.storeCardS1__title}>
            <HeadingS1
              text={title}
              headingLevel={headingLevel}
              variant="small"
            />
          </div>
        </div>

        <div className={styles.storeCardS1__bottom}>
          <div className={styles.storeCardS1__activeCount}>
            <span>{couponCount || 0} Active Coupons</span>
          </div>

          <div className={styles.storeCardS1__cta}>
            <ButtonS2
              title={ctaTitle}
              variant={variant}
              showIcon={false}
              clickHandler={ctaHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCardS1;
