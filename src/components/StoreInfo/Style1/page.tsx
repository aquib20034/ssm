"use client";

import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const StoreInfoS1: FunctionComponent<Props> = ({
  title,
  description,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className={styles.storeInfoS1}>
      <div className={styles.storeInfoS1__wrapper}>
        <div onClick={() => {}} className={styles.storeInfoS1__bookmark}>
          <span className="x_heart-1"></span>
        </div>

        <div className={styles.storeInfoS1__image}>
          <figure>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={213}
              height={213}
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            />
          </figure>
        </div>

        <div className={styles.storeInfoS1__title}>
          <HeadingS1 text={title} variant="small" headingLevel="h2" />
        </div>

        <div className={styles.storeInfoS1__description}>
          <p className="body-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreInfoS1;
