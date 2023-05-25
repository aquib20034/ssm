import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";
import ButtonS2 from "@/components/Button/Style2/page";

type Props = {
  productUrl: string;
  productAlt: string;
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

const ProductCardS1: FunctionComponent<Props> = ({
  productUrl,
  productAlt,
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
    <div className={styles.productCardS1}>
      <div className={styles.productCardS1__thumbnail}>
        <figure>
          <img src={productUrl} alt={productAlt} />
        </figure>
      </div>

      <div className={styles.productCardS1__info}>
        <div className={styles.productCardS1__top}>
          <div
            className={`${styles.productCardS1__tag} ${
              styles[`productCardS1__tag--${variant}`]
            }`}
          >
            {tagName}
          </div>
        </div>

        <div className={styles.productCardS1__mid}>
          <div className={styles.productCardS1__logo}>
            <figure>
              <img src={logoUrl} alt={logoAlt} />
            </figure>
          </div>

          <div className={styles.productCardS1__title}>
            <HeadingS1
              text={title}
              headingLevel={headingLevel}
              variant="tiny"
            />
          </div>
        </div>

        <div className={styles.productCardS1__bottom}>
          <div className={styles.productCardS1__activeCount}>
            <span>{couponCount || 0} Active Coupons</span>
          </div>

          <div className={styles.productCardS1__cta}>
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

export default ProductCardS1;
