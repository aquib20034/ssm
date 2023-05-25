"use client";

import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./index.module.scss";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";
import ButtonS2 from "@/components/Button/Style2/page";

type Props = {
  isVerified: boolean;
  isCoupon: boolean;
  usage: string;
  title: string;
  validTil: string;
  isBookmarked: boolean;
  tooltipText: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  isDisabled: boolean;
  clickHandler: () => void;
};

const CouponCardS1: FunctionComponent<Props> = ({
  isVerified,
  isCoupon,
  usage,
  title,
  validTil,
  isBookmarked,
  tooltipText,
  headingLevel,
  isDisabled,
  clickHandler,
}) => {
  const [isVerifiedLocal, setIsVerifiedLocal] = useState(false);
  const [isCouponLocal, setIsCouponLocal] = useState(false);
  const [usageLocal, setUsageLocal] = useState("");
  const [titleLocal, setTitleLocal] = useState("");
  const [validTilLocal, setValidTilLocal] = useState("");
  const [isBookmarkedLocal, setIsBookmarkedLocal] = useState(false);
  const [tooltipTextLocal, setTooltipTextLocal] = useState("");
  const [headingLevelLocal, setHeadingLevelLocal] = useState("h3");
  const [isDisabledLocal, setIsDisabledLocal] = useState(false);

  useEffect(() => {
    setIsVerifiedLocal(isVerified);
    setIsCouponLocal(isCoupon);
    setUsageLocal(usage);
    setTitleLocal(title);
    setValidTilLocal(validTil);
    setTooltipTextLocal(tooltipText);
    setHeadingLevelLocal(headingLevel);
    setIsBookmarkedLocal(isBookmarked);
    setIsDisabledLocal(isDisabled);
  }, []);

  return (
    <div
      className={`${styles.couponCardS1} ${
        isDisabledLocal ? styles["couponCardS1--disabled"] : ""
      }`}
    >
      <div className={styles.couponCardS1__wrapper}>
        <div className={styles.couponCardS1__top}>
          <div className={styles.attributes}>
            <div className={styles.attributes__wrapper}>
              {isVerifiedLocal ? (
                <div
                  className={`${styles.attributes__item} ${styles["attributes__item--green"]}`}
                >
                  Verified
                </div>
              ) : null}

              <div
                className={`${styles.attributes__item} ${
                  isCouponLocal
                    ? styles["attributes__item--primary"]
                    : styles["attributes__item--secondary"]
                }`}
              >
                {isCouponLocal ? "Coupon" : "Deal"}
              </div>

              {usageLocal ? (
                <div className={styles.attributes__item}>{usageLocal}</div>
              ) : null}
            </div>
          </div>

          {!isDisabledLocal ? (
            <div className={styles.iconBtns}>
              <div className={styles.iconBtns__item}>
                <span className="x_heart-1"></span>
              </div>

              {tooltipText ? (
                <div
                  className={`${styles.iconBtns__item} ${styles["iconBtns__item--secondary"]}`}
                >
                  <span className="x_info-circle-1"></span>

                  <div className={styles.tooltip}>
                    <div className={styles.tooltip__wrapper}>
                      <div className={styles.tooltip__content}>
                        {tooltipTextLocal}
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className={styles.couponCardS1__mid}>
          <HeadingS1
            text={titleLocal}
            // @ts-ignore
            headingLevel={headingLevelLocal}
            variant="small"
            color={isDisabledLocal ? "disabled" : "default"}
          />
        </div>

        <div className={styles.couponCardS1__bottom}>
          <div className={styles.attributes}>
            <div className={styles.attributes__item}>
              Valid Until: {validTilLocal}
            </div>
          </div>

          <div className={styles.couponCardS1__cta}>
            <ButtonS2
              title="Get Code"
              variant={isDisabledLocal ? "disabled" : "primary"}
              clickHandler={clickHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponCardS1;
