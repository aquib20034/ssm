"use client";

import React, { FunctionComponent, useState } from "react";
import styles from "./index.module.scss";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";

type Props = {
  title: string;
  content: string;
  headingLevel: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

const CollapsableContentS1: FunctionComponent<Props> = ({
  title,
  content,
  headingLevel,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`${styles.collapsableContentS1} contentBox`}>
      <div className={styles.collapsableContentS1__wrapper}>
        <div className={styles.collapsableContentS1__title}>
          <HeadingS1 text={title} variant="small" headingLevel={headingLevel} />
        </div>

        <div className={styles.collapsableContentS1__divider}></div>

        <div className={styles.collapsableContentS1__content}>
          <div
            className={`${styles.collapsableContentS1__typography} ${
              showMore ? styles.expanded : ""
            }`}
          >
            <p className="body-2">{content}</p>
          </div>

          <div className={styles.collapsableContentS1__btn}>
            <button
              type="button"
              className="anchorTagS1"
              onClick={toggleShowMore}
            >
              {showMore ? "View Less" : "See All Terms"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsableContentS1;
