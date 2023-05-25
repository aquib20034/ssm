import React from "react";
import styles from "./index.module.scss";
import HeadingS1 from "@/components/Typography/Heading/Style1/page";

const ReviewSubmitS1 = () => {
  const localRating = 2;

  return (
    <div className={styles.reviewSubmitS1}>
      <div className={styles.reviewSubmitS1__wrapper}>
        <div>
          <HeadingS1
            text="How do you rate Amazon?"
            variant="medium"
            headingLevel="h3"
          />
        </div>

        <div className={styles.ratingStars}>
          {[...Array(5)].map((e, index) => {
            return (
              <span
                key={`star-${index}`}
                className={`${styles.icon} ${
                  localRating <= index ? "" : styles["icon--active"]
                }`}
              >
                <span
                  className={`${
                    localRating <= index ? "x_star-unfilled" : "x_star-filled"
                  }`}
                ></span>
              </span>
            );
          })}
        </div>

        <div className="mt-10">
          <p className="body-1">Please rate Amazon on your experience</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitS1;
