import React, { FunctionComponent } from "react";
import styles from "./index.module.scss";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";

type Props = {
  title: string;
  description: string;
};

const FaqS1: FunctionComponent<Props> = ({ title, description }) => {
  return (
    <div className={styles.faqS1}>
      <div className={styles.faqS1__wrapper}>
        <div className={styles.faqS1__title}>
          <HeadingS1 text={title} variant="tiny" headingLevel="h3" />
        </div>

        <div className={styles.faqS1__description}>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqS1;
